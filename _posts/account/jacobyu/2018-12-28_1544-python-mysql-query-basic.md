
---
title: 'python:  mysql DB query 요청'
permlink: 1544-python-mysql-query-basic
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-12-28 01:11:27
categories:
- basic
tags:
- basic
- kr-dev
- tutorial
- busy
- jjangjjangman
thumbnail: 'https://ipfs.busy.org/ipfs/QmVAizcpkqMs1u12jp7psg96r5AnmLL7fX3wNuLLBvq2UA'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


<p>안녕하세요. 제이콥입니다.</p>
<p>이번 글에서는 python으로 mysql db에 접근, query를 요청하는 것에 대해 정리를 해봤습니다.</p>
<p>다른걸로 공부하시다 이렇게 사용할 수 있구나 정도.. 보시면 될 것 같습니다.</p>
<hr />
<p>이전 글에서는 mysql-workbench를 설치했었습니다.</p>

mysql-workbench를 설치하고 싶다면 아래 글을 봐보세요.

-> https://busy.org/@jacobyu/1535-mysql-db-workbench-setup-vultr-ubuntu


<p>설치를 한 후, schema와 table을 생성해야하는데요.</p>
<p>이 생성과정은 mysql-workbench에서 하면 아주 편합니다.</p>
<p>UI에서 테이블 이름, 필드 이름, 타입 등을 넣어주면 됩니다.</p>
<p>그러면 자동으로 mysql query 문이 생성됩니다.</p>
<p><img src="https://ipfs.busy.org/ipfs/QmVAizcpkqMs1u12jp7psg96r5AnmLL7fX3wNuLLBvq2UA" alt="image.png" /></p>
<hr />
<p>이제 파이썬으로 mysql을 다뤄보겠습니다.</p>
<p>먼저 pymysql 라이브러리를 설치합니다.</p>
<blockquote><p>pip install pymysql</p></blockquote>
<hr />
<p>설치 다하셨나요? ㅎㅎ</p>
<p>제가 작성한 코드로 설명해보겠습니다.</p>
<p>저는 object map라는 테이블을 만들었고 object를 테이블에 넣고 지우고 업데이트하고 가져오는 작업을 해봤습니다.</p>
<hr />
<p>먼저 특정 db의 schema에 연결을 합니다.</p>
<p>연결이 되면 이 conn이라는 객체를 이용해서 여러 query를 수행합니다.</p>
<p>DB가 설치된 서버 host name,</p>
<p>DB에 접근할 user명, 비밀번호,</p>
<p>Schema 등을 입력합니다.</p>
<pre class="brush: python; title: ; notranslate" title="">

    def initDB(self):
        conn = pymysql.connect(
        host= 'test.net',
        user= 'test',
        password= 'test_pw',
        db= 'your_schema',
        charset= 'utf8mb4')
        return conn


</pre>
<p>아래 함수는 select로 테이블 내의 값들을 가져와서</p>
<p>Object라는 객체에 값을 채워넣는 일을 합니다.</p>
<p>이 코드에서는 처음에 정의한 initDB로 connection을 한 후, 쿼리를 수행하는 것을 볼 수 있습니다.</p>


<pre class="brush: python; title: ; notranslate" title="">

    def loadObjectMap(self):
        conn = self.initDB()
        result = None
        try:
            with conn.cursor() as cursor:
                sql = 'SELECT * FROM ObjectMap'
                cursor.execute(sql)
                result = cursor.fetchall()
                # print(result)
        except Exception as e:
            print('I got error on search table')
            conn.close()
        conn.close()
        objectArray = []
        for object_quary in result:
            obj = Object()
            obj.id = object_quary[0] # auto id
            obj.tag = object_quary[2]
            obj.tagName = object_quary[3]
            obj.directionX = object_quary[4]
            obj.directionY = object_quary[5]
            obj.directionZ = object_quary[6]
            objectArray.append(obj)
        return objectArray

</pre>


<p>아래 함수들은 물체를 지우고, 넣고, 업데이트 하는 함수들입니다.</p>
<pre class="brush: python; title: ; notranslate" title="">

    def delete_object(self, auto_id): #delete an object which has auto_id
        pass # DELETE FROM `athena`.`ObjectMap` WHERE `AI_ID`='15';
        conn = self.initDB()
        try:
            with conn.cursor() as cursor:
                sql = 'DELETE FROM ObjectMap WHERE AI_ID = %s'
                cursor.execute(sql, (auto_id))
            conn.commit()
            print('I successed on deleting ID')
        except Exception as e:
            print('I got error on deleting ID')
            print(e)
            conn.close()
        conn.close()

    def insert_object(self, obj): # insert new object to DB
        # obj.id, obj.tag, obj.tagName, obj.directionX, obj.directionY, obj.directionZ
        conn = self.initDB()
        try:
            with conn.cursor() as cursor:
                # print obj
                sql = 'INSERT INTO ObjectMap (objectMapID, tagID, name, directionX, directionY, directionZ) VALUES (%s, %s, %s, %s, %s, %s)'
                cursor.execute(sql, (obj.id, obj.tag, obj.tagName, obj.directionX, obj.directionY, obj.directionZ))
            conn.commit()
            print('I successed on inserting ID')
        except Exception as e:
            print('I got error on inserting ID')
            print(e)
            conn.close()
            return 0
        conn.close()
        return 1

    def update_object(self, updateID, obj): # update obj info to another object which has updateID.
        # self.update_object(obj.id, obj.directionX, obj.directionY, obj.directionZ)
        conn = self.initDB()
        try:
            with conn.cursor() as cursor:
                sql = 'UPDATE ObjectMap SET tagID = %s, name = %s, directionX = %s, directionY = %s, directionZ = %s WHERE AI_ID = %s'
                cursor.execute(sql, (obj.tag, obj.tagName, obj.directionX, obj.directionY, obj.directionZ, updateID))
            conn.commit()
            print('I successed on updating ID')
        except Exception as e:
            print('I got error on updating ID')
            print(e)
            conn.close()
        conn.close()

</pre>
<p>끝!</p>
<p>감사합니다.</p>


- - -

This page is synchronized from the post: ['python:  mysql DB query 요청'](https://steemit.com/@jacobyu/1544-python-mysql-query-basic)
