
---
title: 'Witness update: new server with 512 GB SSD and compile steem 0.20.9 unter ubuntu 18.04'
permlink: witness-update-new-server-with-512-gb-ssd-and-compile-steem-0-20-9-unter-ubuntu-18-04
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2019-02-23 21:09:09
categories:
- witness-category
tags:
- witness-category
- witness-update
- witness
- steemdev
- busy
thumbnail: 'https://ipfs.busy.org/ipfs/QmWNzwEb71CJpjbUdKaT6uYDZfpwMtBVWAJYJfXq528uhb'
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


The disc space of my witness server is shrinking by 0.1 GB per day. 

![image.png](https://ipfs.busy.org/ipfs/QmWNzwEb71CJpjbUdKaT6uYDZfpwMtBVWAJYJfXq528uhb)

Only 5.8 GB are left, which means that in two month I will run out of disc space.  I decided to rent a new server with a bigger hard drive now.

The new server has a 2 x 512 GB NVMe SSD which should be sufficient for a while.

There is no installation image available for Ubuntu 16.04, so I have to go with 18.04 for my new server.

I know that there is a good working docker image, but I like it to run steem with systemd.

## Installation of steem on Ubuntu 18.04

I found the manual from @perduta: [How to compile STEEM under Ubuntu 18.04 LTS](https://steemit.com/steem/@perduta/how-to-compile-steem-under-ubuntu-18-04-lts), but It did not work for me. I found out that the github master is building unter 18.04.

But I decided to try to compile the v0.20.9 version and not the master which is not official released.

### Installation of necessary packages

```
apt-get update
apt-get install -y \
   autoconf \
   automake \
   autotools-dev \
   bsdmainutils \
   build-essential \
   cmake \
   doxygen \
   gdb \
   git \
   libboost-all-dev \
   libyajl-dev \
   libreadline-dev \
   libssl-dev \
   libtool \
   liblz4-tool \
   ncurses-dev \
   pkg-config \
   python3 \
   python3-dev \
   python3-jinja2 \
   python3-pip \
   nginx \
   fcgiwrap \
   awscli \
   jq \
   wget \
   virtualenv \
   gdb \
   libgflags-dev \
   libsnappy-dev \
   zlib1g-dev \
   libbz2-dev \
   liblz4-dev \
   libzstd-dev
```
## Build and install openssl 1.0.2q
steem 0.20.9 does not compile with openssl 1.1.0, so I have to compile the newest 1.0.2.
```
wget https://www.openssl.org/source/openssl-1.0.2q.tar.gz
tar -xzvf openssl-1.0.2q.tar.gz
cd openssl-1.0.2q
sudo ./config
sudo make install
```

## Checkout steem
```
apt install git
cd ~/
mkdir git
cd git
git clone https://github.com/steemit/steem
cd steem
git checkout  v0.20.9
```
## Patch steem
There are some patches necessary to be able to compile steem 0.20.9 unter Ubuntu 18.04.
The following changes were made:
* Fix misleading-indentation build error
* Fix error: In the GNU C Library, "major" is defined
* Fix Can't locate doxygen/perlmod/DoxyDocs.pm
* Fix throw will always call terminate
```
diff --git a/libraries/fc/src/compress/miniz.c b/libraries/fc/src/compress/miniz.c
index 7123d622..f911fc5b 100644
--- a/libraries/fc/src/compress/miniz.c
+++ b/libraries/fc/src/compress/miniz.c
@@ -1497,7 +1497,10 @@ tinfl_status tinfl_decompress(tinfl_decompressor *r, const mz_uint8 *pIn_buf_nex
       {
         mz_uint8 *p = r->m_tables[0].m_code_size; mz_uint i;
         r->m_table_sizes[0] = 288; r->m_table_sizes[1] = 32; TINFL_MEMSET(r->m_tables[1].m_code_size, 5, 32);
-        for ( i = 0; i <= 143; ++i) *p++ = 8; for ( ; i <= 255; ++i) *p++ = 9; for ( ; i <= 279; ++i) *p++ = 7; for ( ; i <= 287; ++i) *p++ = 8;
+        for ( i = 0; i <= 143; ++i) *p++ = 8;^M
+        for ( ; i <= 255; ++i) *p++ = 9;^M
+        for ( ; i <= 279; ++i) *p++ = 7;^M
+        for ( ; i <= 287; ++i) *p++ = 8;^M
       }
       else
       {
@@ -2281,7 +2284,10 @@ static MZ_FORCEINLINE void tdefl_find_match(tdefl_compressor *d, mz_uint lookahe
         if (TDEFL_READ_UNALIGNED_WORD(&d->m_dict[probe_pos + match_len - 1]) == c01) break;
       TDEFL_PROBE; TDEFL_PROBE; TDEFL_PROBE;
     }
-    if (!dist) break; q = (const mz_uint16*)(d->m_dict + probe_pos); if (TDEFL_READ_UNALIGNED_WORD(q) != s01) continue; p = s; probe_len = 32;
+    if (!dist) break;^M
+    q = (const mz_uint16*)(d->m_dict + probe_pos);^M
+    if (TDEFL_READ_UNALIGNED_WORD(q) != s01) continue;^M
+    p = s; probe_len = 32;^M
     do { } while ( (TDEFL_READ_UNALIGNED_WORD(++p) == TDEFL_READ_UNALIGNED_WORD(++q)) && (TDEFL_READ_UNALIGNED_WORD(++p) == TDEFL_READ_UNALIGNED_WORD(++q)) &&
                    (TDEFL_READ_UNALIGNED_WORD(++p) == TDEFL_READ_UNALIGNED_WORD(++q)) && (TDEFL_READ_UNALIGNED_WORD(++p) == TDEFL_READ_UNALIGNED_WORD(++q)) && (--probe_len > 0) );
     if (!probe_len)
@@ -2848,7 +2854,7 @@ void *tdefl_write_image_to_png_file_in_memory(const void *pImage, int w, int h,
   #include <stdio.h>
   #include <sys/stat.h>
 
-  #if defined(_MSC_VER)
+  #if defined(_MSC_VER)^M
     static FILE *mz_fopen(const char *pFilename, const char *pMode)
     {
       FILE* pFile = NULL;
diff --git a/libraries/protocol/include/steem/protocol/version.hpp b/libraries/protocol/include/steem/protocol/version.hpp
index 98be2b6f..4eef2727 100644
--- a/libraries/protocol/include/steem/protocol/version.hpp
+++ b/libraries/protocol/include/steem/protocol/version.hpp
@@ -1,5 +1,5 @@
 #pragma once
-
+#include <sys/sysmacros.h>
 #include <fc/string.hpp>
 #include <fc/time.hpp>
 
diff --git a/libraries/wallet/CMakeLists.txt b/libraries/wallet/CMakeLists.txt
index b669e3e0..9fcbb597 100644
--- a/libraries/wallet/CMakeLists.txt
+++ b/libraries/wallet/CMakeLists.txt
@@ -11,7 +11,7 @@ if( PERL_FOUND AND DOXYGEN_FOUND AND NOT "${CMAKE_GENERATOR}" STREQUAL "Ninja" )
                       DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/Doxyfile ${CMAKE_CURRENT_SOURCE_DIR}/include/steem/wallet/wallet.hpp )
 
   add_custom_command( OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp
-                      COMMAND PERLLIB=${CMAKE_CURRENT_SOURCE_DIR} ${PERL_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/generate_api_documentation.pl ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
+                      COMMAND PERLLIB=${CMAKE_CURRENT_BINARY_DIR} ${PERL_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/generate_api_documentation.pl ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
 
                       COMMAND ${CMAKE_COMMAND} -E copy_if_different ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp
                       COMMAND ${CMAKE_COMMAND} -E remove ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
diff --git a/tests/db_fixture/database_fixture.cpp b/tests/db_fixture/database_fixture.cpp
index 6de3ff96..88b9119a 100644
--- a/tests/db_fixture/database_fixture.cpp
+++ b/tests/db_fixture/database_fixture.cpp
@@ -916,7 +916,7 @@ json_rpc_database_fixture::json_rpc_database_fixture()
    return;
 }
 
-json_rpc_database_fixture::~json_rpc_database_fixture()
+json_rpc_database_fixture::~json_rpc_database_fixture() noexcept(false)
 { try {
    // If we're unwinding due to an exception, don't do any more checks.
    // This way, boost test's last checkpoint tells us approximately where the error was.
diff --git a/tests/db_fixture/database_fixture.hpp b/tests/db_fixture/database_fixture.hpp
index bcf5ac62..9b9a9b5e 100644
--- a/tests/db_fixture/database_fixture.hpp
+++ b/tests/db_fixture/database_fixture.hpp
@@ -202,7 +202,7 @@ struct database_fixture {
    bool skip_key_index_test = false;
 
    database_fixture() {}
-                      COMMAND PERLLIB=${CMAKE_CURRENT_SOURCE_DIR} ${PERL_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/generate_api_documentation.pl ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
+                      COMMAND PERLLIB=${CMAKE_CURRENT_BINARY_DIR} ${PERL_EXECUTABLE} ${CMAKE_CURRENT_SOURCE_DIR}/generate_api_documentation.pl ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
 
                       COMMAND ${CMAKE_COMMAND} -E copy_if_different ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp
                       COMMAND ${CMAKE_COMMAND} -E remove ${CMAKE_CURRENT_BINARY_DIR}/api_documentation.cpp.new
diff --git a/tests/db_fixture/database_fixture.cpp b/tests/db_fixture/database_fixture.cpp
index 6de3ff96..88b9119a 100644
--- a/tests/db_fixture/database_fixture.cpp
+++ b/tests/db_fixture/database_fixture.cpp
@@ -916,7 +916,7 @@ json_rpc_database_fixture::json_rpc_database_fixture()
    return;
 }
 
-json_rpc_database_fixture::~json_rpc_database_fixture()
+json_rpc_database_fixture::~json_rpc_database_fixture() noexcept(false)
 { try {
    // If we're unwinding due to an exception, don't do any more checks.
    // This way, boost test's last checkpoint tells us approximately where the error was.
diff --git a/tests/db_fixture/database_fixture.hpp b/tests/db_fixture/database_fixture.hpp
index bcf5ac62..9b9a9b5e 100644
--- a/tests/db_fixture/database_fixture.hpp
+++ b/tests/db_fixture/database_fixture.hpp
@@ -202,7 +202,7 @@ struct database_fixture {
    bool skip_key_index_test = false;
 
    database_fixture() {}
-   virtual ~database_fixture() { appbase::reset(); }
+   virtual ~database_fixture() noexcept(false)  { appbase::reset(); }
 
    static fc::ecc::private_key generate_private_key( string seed = "init_key" );
 #ifdef STEEM_ENABLE_SMT
@@ -342,7 +342,7 @@ struct json_rpc_database_fixture : public database_fixture
    public:
 
       json_rpc_database_fixture();
-      virtual ~json_rpc_database_fixture();
+      virtual ~json_rpc_database_fixture() noexcept(false);
 
       void make_array_request( std::string& request, int64_t code = 0, bool is_warning = false, bool is_fail = true );
       fc::variant make_request( std::string& request, int64_t code = 0, bool is_warning = false, bool is_fail = true );
```
Store the changes to ubuntu1804.patch and apply the patch by
```
cd ~/git/steem
git apply ../../ubuntu1804.patch
```
## Build steem
```
cd ~/git/steem
mkdir build
cd build
cmake -DLOW_MEMORY_NODE=ON -DCMAKE_BUILD_TYPE=Release -DSKIP_BY_TX_ID=ON -DCLEAR_VOTES=ON -DOPENSSL_ROOT_DIR=/usr/local/ssl ..
make -j$(nproc) steemd
make -j$(nproc) cli_wallet
make install
```

## Short test
I will shortly test if the build steemd is executable:
```
steemd --version
```
![image.png](https://ipfs.busy.org/ipfs/QmZVdoSZNtytPCNxsCSiAcpoiFbM4v8rjJWWBpsqoQ9wYe)

## Next steps
I have compiled steem and will now proceed with the remaining steps. I will write a detailed step by step report and publish it in my next witness post.

- - -

This page is synchronized from the post: ['Witness update: new server with 512 GB SSD and compile steem 0.20.9 unter ubuntu 18.04'](https://steemit.com/@holger80/witness-update-new-server-with-512-gb-ssd-and-compile-steem-0-20-9-unter-ubuntu-18-04)
