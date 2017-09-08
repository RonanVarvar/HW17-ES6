class Client {
    constructor(firstName, lastName, address, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    setData() {
        let id = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111,
            data = JSON.stringify ({
                ID: id,
                firstName: this.firstName,
                lastName: this.lastName,
                address: this.address,
                phone: this.phone
            }),
            newData,
            dataInfo,
            elem;

        localStorage.setItem(id, data);

            newData = JSON.parse(localStorage.getItem(id));
            dataInfo = '<span class="c-client__message">Client create successful:<br>' +
                '<span>ID:' + newData.ID + '</span><br>' +
                '<span>first name:' + newData.firstName + '</span><br>' +
                '<span>last name:' + newData.lastName+ '</span><br>' +
                '<span>address:' + newData.amount + newData.address + '</span><br>' +
                '<span>phone:' + newData.phone + '</span></span>';
            elem = document.getElementsByClassName('c-client__info')[0];

        elem.innerHTML = dataInfo;

        setTimeout(function () {
            let message = document.getElementsByClassName('c-client__message')[0];
            message.remove();
        }, 5000)
    }

    getData() {
        let ID = document.getElementsByClassName('c-client__id')[0],
            elem = document.getElementsByClassName('c-client__info')[0];

        for (let key in localStorage) {
            if (ID.value === key) {
                let data = JSON.parse(localStorage.getItem(ID.value)),
                    dataInfo = '<span class="c-client__message">Payment was successful:<br>' +
                        '<span>ID:' + newData.ID + '</span><br>' +
                        '<span>first name:' + newData.sendersCard + '</span><br>' +
                        '<span>last name:' + newData.lastName+ '</span><br>' +
                        '<span>address:' + newData.amount + newData.address + '</span><br>' +
                        '<span>phone:' + newData.phone + '</span></span>';

                elem.innerHTML = dataInfo;

                setTimeout(function () {
                    let message = document.getElementsByClassName('c-client__message')[0];
                    message.remove();
                }, 5000)
            } else if (ID.value != key) {
                console.log('id is not found');
            }
        }
    }

    updateData() {
        let ID = document.getElementsByClassName('c-client__id')[0],
            data = JSON.stringify ({
                clientID: ID.value,
                firstName: this.firstName,
                lastName: this.lastName,
                address: this.address,
                phone: this.phone
            });

        for (let key in localStorage) {
             if (ID.value == key) {
                 localStorage.setItem(ID.value, data);
             } else if (ID.value !== key) {
                 console.log('id is not found');
             }
        }
    }

    deleteData() {
        let ID = document.getElementsByClassName('c-client__id')[0];

        for (let key in localStorage) {
            if (ID.value === key) {
                localStorage.removeItem(ID.value);
            } else if (ID.value !== key) {
                console.log('id is not found');
            }
        }
    }

}

class Card {
    constructor(number, expiryDate, cvvCode, client) {
        this.number = number;
        this.expiryDate = expiryDate;
        this.cvvCode = cvvCode;
        this.client = client;
    }

    setData() {
        let id = Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111,
            data = JSON.stringify ({
            number: this.number,
            expirydate: this.expiryDate,
            CVVcode: this.cvvCode,
            client: this.client,
            cardID: id
        });

        localStorage.setItem(id, data);
        console.log ('Create new card:' + this.number);
    }

    updateData() {
        let cartID = document.getElementsByClassName('c-card__id')[0],
            data = JSON.stringify ({
                number: this.number,
                expirydate: this.expiryDate,
                CVVcode: this.cvvCode,
                client: this.client,
                cardID: cartID.value
            });

        for (let key in localStorage) {
            if (cartID.value === key) {
                localStorage.setItem(cartID.value, data);
            } else if (cartID.value !== key){
                console.log('id is not found');
            }
        }
    }

    deleteData() {
        let cartID = document.getElementsByClassName('c-card__id')[0];

        for (let key in localStorage) {
            if (cartID.value === key) {
                localStorage.removeItem(cartID.value);
            } else if (cartID.value !== key){
                console.log('id is not found');
            }
        }
    }

}

class Payment {
    constructor (sendersCard, receiversCard, amount, currency, date) {
        this.sendersCard = sendersCard;
        this.receiversCard = receiversCard;
        this.amount = amount;
        this.currency = currency;
        this.date = date;
    }

    setData() {
        let id = Math.floor(Math.random() * (99999 - 11111 + 1)) + 11111,
            newDate = new Date(),
            options = {
                year: "numeric", month: "numeric",
                day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
            },
            date = newDate.toLocaleTimeString('en-US', options),
            data = JSON.stringify ({
                ID: id,
                sendersCard: this.sendersCard,
                receiversCard: this.receiversCard,
                amount: this.amount,
                currency: this.currency,
                date: date
            });

            localStorage.setItem(id, data);

        let newData = JSON.parse(localStorage.getItem(id)),
            dataInfo = '<span class="c-payment__message">Payment was successful:<br>' +
            '<span>ID:' + newData.ID + '</span><br>' +
            '<span>Senders card:' + newData.sendersCard + '</span><br>' +
            '<span>Receivers card:' + newData.receiversCard + '</span><br>' +
            '<span>Amount:' + newData.amount + newData.currency + '</span><br>' +
            '<span>' + newData.date + '</span></span>',
            elem = document.getElementsByClassName('c-payment__info')[0];

            elem.innerHTML = dataInfo;

            setTimeout(function () {
                let message = document.getElementsByClassName('c-payment_message')[0];
                message.remove();
            }, 5000)
    }



    getData() {
        let ID = document.getElementsByClassName('c-payment__id')[0],
            elem = document.getElementsByClassName('c-payment__info')[0];

        for (let key in localStorage) {
            if (ID.value === key) {
                let data = JSON.parse(localStorage.getItem(ID.value)),
                    dataInfo = '<span class="c-payment__message"><span>ID:' + data.ID + '</span><br>' +
                        '<span>Senders card:' + data.sendersCard + '</span><br>' +
                        '<span>Receivers card:' + data.receiversCard + '</span><br>' +
                        '<span>Amount:' + data.amount + data.currency + '</span><br>' +
                        '<span>' + data.date + '</span></span>';
                elem.innerHTML = dataInfo;
                setTimeout(function () {
                    let message = document.getElementsByClassName('c-payment__message')[0];
                    message.remove();
                }, 5000)
            } else if (ID.value != key) {
                console.log('id is not found');
            }
        }
    }

    updateData() {
        let paimentID = document.getElementsByClassName('c-payment__id')[0],
            newDate = new Date(),
            options = {
               year: "numeric", month: "numeric",
               day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
            },
            date = newDate.toLocaleTimeString('en-US', options),
            data = JSON.stringify ({
                ID: paimentID,
                sendersCard: this.sendersCard,
                receiversCard: this.receiversCard,
                amount: this.amount,
                currency: this.currency,
                date: date
            });

        for (let key in localStorage) {
            if (paimentID.value === key) {
                localStorage.setItem(paimentID.value, data);
            } else if (paimentID.value !== key) {
                console.log('id is not found');
            }
        }
    }

    deleteData() {
        let paimentID = document.getElementsByClassName('c-payment__id')[0];

        for (let key in localStorage) {
            if (paimentID.value === key) {
                localStorage.removeItem(paimentID.value);
            } else if (paimentID.value !== key) {
                console.log('id is not found');
            }
        }
    }
}

let formClient = document.forms[0],
    formCard = document.forms[1],
    formPayment = document.forms[2],
    inputCard = formCard.elements[0],
    inputSendersCard = formPayment.elements[0],
    inputReceiversCard = formPayment.elements[1],
    expiryDate = formCard.elements[1],
    buttonCreateClient = formClient.elements[5],
    buttonDeleteClient = formClient.elements[7],
    buttonUpdateClient = formClient.elements[6],
    buttonCreateCard = formCard.elements[5],
    buttonDeleteCard = formCard.elements[7],
    buttonUpdateCard = formCard.elements[6],
    buttonTransaction = formPayment.elements[5],
    buttonDeletePayment = formPayment.elements[7],
    buttonUpdatePayment = formPayment.elements[6],
    buttonFetchDataPayment = formPayment.elements[8],
    inputTel = formClient.elements[3],
    old = 0;

    inputCard.addEventListener('input', formatCardCode, false);
    inputSendersCard .addEventListener('input', formatCardCode, false);
    inputReceiversCard.addEventListener('input', formatCardCode, false);

function formatCardCode() {
    let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
    this.value = cardCode;
};

inputTel.onclick = function() {
    inputTel.value = "+";
};

inputTel.onkeydown = function() {
    let curLen = inputTel.value.length;

    if (curLen < old){
        old--;
        return;
    } else if (curLen == 0) {
        inputTel.value = inputTel.value + "+";
    } else if (curLen == 3) {
        inputTel.value = inputTel.value + "(";
    } else if (curLen == 7) {
        inputTel.value = inputTel.value + ")-";
    } else if (curLen == 12) {
        inputTel.value = inputTel.value + "-";
    } else if (curLen == 15){
        inputTel.value = inputTel.value + "-";
    } else if (curLen > 17) {
        inputTel.value = inputTel.value.substring(0, inputTel.value.length - 1);
    } else {
        old++;
    }
};

expiryDate.onkeydown = function() {
    let curLen = expiryDate.value.length;

    if (curLen < old){
        old--;
        return;
    } else if (curLen == 2) {
        expiryDate.value = expiryDate.value + "/";
    } else if (curLen > 4) {
        expiryDate.value = expiryDate.value.substring(0, 4);
    } else {
        old++;
    }
};

buttonCreateClient.onclick = function (e) {
    let firstName = formClient.elements[0],
        lastName = formClient.elements[1],
        address = formClient.elements[2],
        phone= formClient.elements[3],
        newClient = new Client(firstName.value, lastName.value, address.value, phone.value);

    newClient.setData();
};

buttonUpdateClient.onclick = function (e) {
    let firstName = formClient.elements[0],
        lastName = formClient.elements[1],
        address = formClient.elements[2],
        phone= formClient.elements[3],
        updateClient = new Client(firstName.value, lastName.value, address.value, phone.value);

    updateClient.updateData();
};

buttonDeleteClient.onclick = function (e) {
    let deleteClient = new Client();

    deleteClient.deleteData();
};

buttonCreateCard.onclick = function (e) {
    let number = formCard.elements[0],
        expiryDate = formCard.elements[1],
        cvvCode = formCard.elements[2],
        client = formCard.elements[3],
        newCard = new Card(number.value, expiryDate.value, cvvCode.value, client.value);

    newCard.setData();
};

buttonUpdateCard.onclick = function (e) {
    let number = formCard.elements[0],
        expiryDate = formCard.elements[1],
        cvvCode = formCard.elements[2],
        client = formCard.elements[3],
        updateCard = new Card(number.value, expiryDate.value, cvvCode.value, client.value);

    updateCard.updateData();
};

buttonDeleteCard.onclick = function (e) {
    let deleteCard = new Card();

    deleteCard.deleteData();
};

buttonTransaction.onclick = function (e) {
    let sendersCard = formPayment.elements[0],
        receiversCard = formPayment.elements[1],
        amount = formPayment.elements[2],
        currency = formPayment.elements[3],
        newPayment = new Payment(sendersCard.value, receiversCard.value, amount.value, currency.value);

    newPayment.setData();
};

buttonUpdatePayment.onclick = function (e) {
    let sendersCard = formPayment.elements[0],
        receiversCard = formPayment.elements[1],
        amount = formPayment.elements[2],
        currency = formPayment.elements[3],
        updatePayment = new Payment(sendersCard.value, receiversCard.value, amount.value, currency.value);

    updatePayment.updateData();
};

buttonDeletePayment.onclick = function (e) {
    let deletePayment = new Payment();

    deletePayment.deleteData();
};

buttonFetchDataPayment.onclick = function (e) {
    let FetchDataPayment = new Payment();

    FetchDataPayment.getData();
};
