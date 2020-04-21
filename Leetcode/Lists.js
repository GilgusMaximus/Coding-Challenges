function createListItem(Value){
    let node = {};
    node.value = Value;
    node.next = null;
    return node;
}


function addRemainingListItems(newList, oldList){
    let overflow = false;
    if(oldList !== null){
        while(oldList != null){
            if(oldList.value > 9){
                oldList.Value -= 10;
                if(oldList.next !== null){
                    oldList.next++;
                }else{
                    oldList.next = createListItem(1);
                }
            }
            newList.next = oldList;
            oldList = oldList.next;
        }
    }
}

function addTwoLists(list1, list2){
    let newList = {}, newListLast = null;
    let overflow = false;
    newList.value = list1.value + list2.value;
    newList.next = null;
    newListLast = newList;

    while(true){
        //neues list item erzeugen
        let addedValue = list1.value+list2.value;
        if(addedValue > 9){
            addedValue-=10;
            overflow = true;
        }
        newListLast.next = createListItem(addedValue);
        console.log("Addedvalue", newListLast.next);
        if(list1.next === null){
            if(overflow){
                if(list2.next !== null){
                    list2.next.value += 1;
                }else{
                    list2.next = createListItem(1);
                }
            }
            addRemainingListItems(newListLast, list2.next);
            break;
        }
        list1 = list1.next;
        if(overflow){
            list1.value += 1;
            overflow = false;
        }
        if(list2.next === null){
            addRemainingListItems(newListLast, list1.next);
            break;
        }
        list2= list2.next;
        newListLast = newListLast.next;
    }
    return newList;

}

function testCode(){
    let list1 = createListItem(4);
    let list2 = createListItem(5);
    list1.next = createListItem(7);
    list2.next = createListItem(5);
    let result = addTwoLists(list1, list2);
    while(result !== null){
        console.log(result.value, ",");
        result = result.next;
    }
}

testCode();