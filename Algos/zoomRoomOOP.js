class Attendee {
    constructor(name) {
      this.attendeeName = name;
      this.isMuted = false;
    }
  
    mute() {
      // write code here to set this.isMuted = true
      this.isMuted = true
    }
  
    unmute() {
      // write code here to set this.isMuted = false
      this.isMuted = false
    }
  }
  
  class ZoomRoom {
    constructor(hostKey) {
      this.attendees = {}; // attendees can either be an object or an array, you choose!
      this.attendeeCount = 0;
      this.host = null;
      this.hostKey = hostKey;
    }
  
    addAttendee(attendeeName) {
      // write code here to add passed in attendee to this.attendees
      // don't forget to increment attendeeCount and return it out!
      this.attendees[this.attendeeCount] = attendeeName
      this.attendeeCount++ 
      return this.attendeeCount
    }
  
    removeAttendee() {
      // write code here to remove attendee from this.attendees
      // what else do you need to do before you return the removedAttendee?
      let removed = this.attendees[this.attendeeCount - 1]
      delete this.attendees[this.attendeeCount - 1]
      this.attendeeCount --
      return removed
    }
  
    makeHost(attendeeIndex, hostKey) {
      if (hostKey === this.hostKey) {
        this.host = this.attendees[attendeeIndex]
      }
      // attendeeIndex should be the key of the attendee in this.attendees
      // make sure you check that the hostKey passed in matches this.hostKey before assigning this.host to the attendeeIndex
    }
  
    // how can you leverage the Attendee class's mute and unumute methods to mute/unmute all meeting Attendees?
    muteAll() {
      for (let x in this.attendees){
       this.attendees[x].mute()
      }
    }
  
    unmuteAll() {
      for (let x in this.attendees){
       this.attendees[x].unmute()
      }
    }
  }
  
  // // Uncomment these lines to test your code!
  const myZoom = new ZoomRoom('123abc');
  const brandon = new Attendee('Brandon');
  const carl = new Attendee('Carl');
  myZoom.addAttendee(brandon);
  myZoom.addAttendee(carl);
  
  console.log(myZoom.attendees[0].attendeeName); // -> 'Brandon'
  console.log(myZoom.attendees[1].attendeeName); // -> 'Carl'
  console.log(myZoom.removeAttendee().attendeeName) // -> 'Carl'
  
  myZoom.makeHost(0, '123abc');
  console.log(myZoom.host.attendeeName); // -> 'Brandon'
  
  // // incorrect password will not overwrite host
  myZoom.makeHost(1, 'abc123');
  console.log(myZoom.host.attendeeName) // -> still 'Brandon'
  
  // add bob in so there are two attendees again
  myZoom.addAttendee(new Attendee('Bob'));
  // should make isMuted for all attendees true
  myZoom.muteAll();
  console.log(myZoom.attendees[0].isMuted); // -> true
  console.log(myZoom.attendees[1].isMuted); // -> true
  
  // should make isMuted for all attendees false
  myZoom.unmuteAll();
  console.log(myZoom.attendees[0].isMuted); // -> false
  console.log(myZoom.attendees[1].isMuted); // -> false
  
  