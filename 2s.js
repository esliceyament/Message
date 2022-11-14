class Message {
    constructor(name, mess) {
      this.name = name;
      this.mess = mess;
  
      const now = new Date();
      const current = now.getHours() + ":" + now.getMinutes();
      this.time = current;
    }
    toHtml() {
      return this.name, this.time, this.mess;
    }
  }
  
  class Messenger extends Message {
    constructor(name, mess) {
      super(name, mess);
      this.history = [];
    }
  
    send(senderName, senderMess) {
      this.name = senderName;
      this.mess = senderMess;
      const message = new Message(senderName, senderMess)
      this.history.push(message)
      
    }
  
    showHistory() {
      // console.log(`${this.time} ${this.name}: ${this.text}`);
      this.history.forEach(element => {
          console.log(element.time, element.name, element.mess )
      });
  }
  }
  
  let messenger = new Messenger();
  messenger.send("Adil", "İlk mesaj");
  messenger.send("Meryam", "İkinci mesaj");
  messenger.send("Eldar", "Ucuncu mesaj");
  messenger.send("Fuad", "İkinci mesaj");
  messenger.showHistory();
  
  