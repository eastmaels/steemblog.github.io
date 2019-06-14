
---
title: 'How many different card combination exists for steemmonsters?'
permlink: how-many-different-deck-combination-exists-for-steemmonsters
catalog: true
toc_nav_num: true
toc: true
position: 9999
date: 2018-09-21 11:04:54
categories:
- steemmonsters
tags:
- steemmonsters
- combinations
- python
- steemdev
- busy
thumbnail: None
sidebar:
    right:
        sticky: true
widgets:
    -
        type: toc
        position: right
---


How many different decks with mana costs equal to 20 are currently possible? I wrote a small python script to answer this question. I did the following steps:
* read all cards from https://steemmonsters.com/cards/get_details
* build a card dictionary by the card id
* creating a list with all possible color combinations
* Then I build sets with possible card combinations that summing up to mana costs equal to 20

## Conditions
* A set starts always with a summoner
* Only 1 summoner is allowed
* Each card can exist only once in a deck
* All cards have their maximum level
* Mana cost must exactly be 20
* Gray cards can be used with each color
* A Gold  summoner can pick one additional color + Gray

The Gold cards are special, as they can be combined with another color. So I created a unique name, e.g. "Gold_Red" for this.

All colors can be combined with Gray cards. "Red" means the combination of "Red" and "Gray" cards. I added also "Pure_Red" which excludes the use of "Gray" cards.

# Results
## Results ordered by different colors

| color | card combinations with mana=20 |
| --- | --- |
| Red | 2478 |
| Blue | 2304 |
| Green | 1787 |
| Black | 3444 |
| White | 2181 |
| Gold | 77 |
| Pure_Red | 79 |
| Pure_Blue | 81 |
| Pure_Green | 64 |
| Pure_Black | 98 |
| Pure_White | 79 |
| Pure_Gold | 1 |
| Gold_Red | 1298 |
| Gold_Blue | 1198 |
| Gold_Green | 936 |
| Gold_Black | 1805 |
| Gold_White | 1126 |
| Pure_Gold_Red | 71 |
| Pure_Gold_Blue | 69 |
| Pure_Gold_Green | 53 |
| Pure_Gold_Black | 98 |
| Pure_Gold_White | 66 |

## Results ordered by different summoners

| summoner | card combinations with mana=20 |
| --- | --- |
| Malric Inferno | 1070 |
| Alric Stormbringer | 994 |
| Lyanna Natura | 770 |
| Tyrus Paladium | 936 |
| Zintar Mortalis | 1494 |
| Selenia Sky | 6055 |
| Talia Firestorm | 1408 |
| Xia Seachan | 1310 |
| Xander Foxwood | 1017 |
| Kiara Lightbringer | 1245 |
| Jarlax the Undead | 1950 |


# Conclusion
The new Gray cards increase the number of deck combination a lot. **Selenia Sky** is the summoner with the highest number of card combinations, whereas **Lyanna Natura** has the lowest number of card combinations.

The new summoner from the beta release increases the number of card combinations, as their mana cost is reduced by 1.

The Black cards have the highest number of card combinations and Green cards have the lowest number of card combinations.

# Source code
```
import requests
import itertools

if __name__ == "__main__":
       
    response = requests.get("https://steemmonsters.com/cards/get_details")
    cards = {}
    for r in response.json():
        cards[r["id"]] = r
    colors = {"Red": ["Red", "Gray"], "Blue": ["Blue", "Gray"], "Green": ["Green", "Gray"],
              "Black": ["Black", "Gray"], "White": ["White", "Gray"], "Gold": ["Gold", "Gray"],
              "Pure_Red": ["Red"], "Pure_Blue": ["Blue"], "Pure_Green": ["Green"],
              "Pure_Black": ["Black"], "Pure_White": ["White"], "Pure_Gold": ["Gold"],              
              "Gold_Red": ["Gold", "Red", "Gray"], "Gold_Blue": ["Gold", "Blue", "Gray"],
              "Gold_Green": ["Gold", "Green", "Gray"], "Gold_Black": ["Gold", "Black", "Gray"], 
              "Gold_White": ["Gold", "White", "Gray"],
              "Pure_Gold_Red": ["Gold", "Red"], "Pure_Gold_Blue": ["Gold", "Blue"],
              "Pure_Gold_Green": ["Gold", "Green"], "Pure_Gold_Black": ["Gold", "Black"], 
              "Pure_Gold_White": ["Gold", "White"]}
    
    min_mana = 20
    max_mana = 20
    level = -1

    all_summoner_list = []
    all_monster_list = []
    
    for r in cards:
        if cards[r]["type"] == "Monster":
            all_monster_list.append(r)
        else:
            all_summoner_list.append(r)
                    
    color_sets = {}
    for color in colors:
        print("Calculating combinations for %s" % (color))
        summoner_list = []
        monster_list = []
        
        for r in cards:
            if cards[r]["color"] not in colors[color]:
                continue
            if cards[r]["type"] == "Monster":
                monster_list.append(r)
            elif cards[r]["color"] == colors[color][0]:
                summoner_list.append(r)
        sets = []

        for k in summoner_list:
            for L in range(0, len(monster_list)+1):
                for subset in itertools.combinations(monster_list, L):
                    mana = 0
                    mana += cards[k]["stats"]["mana"]
                    for s in subset:
                        mana += cards[s]["stats"]["mana"][level]
                    new_set = set((k,) + subset)
                    if mana <= max_mana and mana >= min_mana:
                        if new_set not in sets:
                            sets.append(new_set)
        color_sets[color] = sets
    
    summoner_sets = {}
    for summoner in all_summoner_list:
        for c in color_sets:
            for s in color_sets[c]:
                if summoner not in s:
                    continue
                if summoner not in summoner_sets:
                    summoner_sets[summoner] = [s]
                elif s not in summoner_sets[summoner]:
                    summoner_sets[summoner].append(s)
    
    print("| color | card combinations with mana=20 |")
    print("| --- | --- |")
    for color in colors:
        print("| %s | %d |" % (color, len(color_sets[color])))
    
    print("| summoner | card combinations with mana=20 |")
    print("| --- | --- |")
    for s in summoner_sets:
        print("| %s | %d |" % (cards[s]["name"], len(summoner_sets[s])))
```

___
update: I did a small mistake in the script. The results are now corrected.

- - -

This page is synchronized from the post: ['How many different card combination exists for steemmonsters?'](https://steemit.com/@holger80/how-many-different-deck-combination-exists-for-steemmonsters)
