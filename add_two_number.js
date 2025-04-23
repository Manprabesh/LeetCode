class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.head2 = null;
        this.tail2 = null;
        this.head3 = null;
        this.tail3 = null;
    }

    insertAtFirst(value) {
        let node = new Node(value)
        if (this.head == null) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head;
            this.head = node
        }

    }

    insertAtFirst2(value) {
        let node = new Node(value)
        if (this.head2 == null) {
            this.head2 = node
            this.tail2 = node
        }
        else {
            node.next = this.head2;
            this.head2 = node
        }

    }
    insertAtFirst3(value) {
        let node = new Node(value)
        if (this.head3 == null) {
            this.head3 = node
            this.tail3 = node
        }
        else {
            node.next = this.head3;
            this.head3 = node
        }

    }
    passLL() {
        const return_data = addTwoNumbers(this.head, this.head2);
        return return_data
    }

    display() {
        let temp = this.head3
        let temp2 = this.head2
        // console.log(temp);

        while (temp != null) {
            console.log(temp.value);
            temp = temp.next
        }
        // while (temp2 != null) {
        //     console.log(temp2.value);
        //     temp2 = temp2.next
        // }
    }
}


var addTwoNumbers = function (l1, l2) {
    //assuming the data are received in reverse order
    let temp = l1
    let temp2 = l2

    if (temp.value === 0 || temp2.value === 0) {
        return "there is leading 0"
    }

    //123
    //456745

    // let node = new Node(value)
    let ll = new LL()


    let carryNumber = 0;
    while (temp != null && temp2 != null) {

        // if(temp!=null){
        // console.log(temp.value);
        // }

        // if(temp2!=null){
        // console.log(temp2.value);
        // }



        // console.log("carry number", carryNumber);

        let sum = temp.value + temp2.value + Number(carryNumber)
        // console.log("the sum", sum)

        // ll.insertAtFirst()
        //carry the number
        let sumInStr = String(sum)

        carryNumber = sumInStr[0]
        let res = Number(sumInStr[1])
        ll.insertAtFirst3(res)
        // console.log("______", res);

        temp = temp.next
        temp2 = temp2.next

    }
    let result;

    while (temp != null) {
        let sum = temp.value + Number(carryNumber);
        // console.log(carryNumber, "carrynumber")
        let sumInStr = String(sum)
        if (sumInStr.length == 2) {
            carryNumber = sumInStr[0]
        }
        let res = Number(sumInStr[1])
        ll.insertAtFirst3(res)

        temp = temp.next
    }

    while (temp2 != null) {
        // console.log(temp2.value + Number(carryNumber));
        let sum = temp2.value + Number(carryNumber);

        // console.log(carryNumber, "carrynumber")
        let sumInStr = String(sum)
        if (sumInStr.length == 2) {
            carryNumber = sumInStr[0]
        }
        else{
            carryNumber=0

        }
        // carryNumber = sumInStr[0]

        //res will be stored in linkedlist
        let res = Number(sumInStr[1])
        temp2 = temp2.next
        ll.insertAtFirst3(res)

    }

    if(carryNumber){
        //the last number if there is
        console.log(carryNumber,"_______empty");
        ll.insertAtFirst3(res)
    
    }

    return "OK"

};


let ll = new LL()
ll.insertAtFirst(10)
ll.insertAtFirst(9)
ll.insertAtFirst(8)

ll.insertAtFirst2(7)
ll.insertAtFirst2(6)
ll.insertAtFirst2(5)
ll.insertAtFirst2(4)


const data = ll.passLL()
console.log(data)
ll.display()

