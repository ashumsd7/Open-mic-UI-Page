<template>
  <div class="container">
  <form @submit.prevent="sendMsg" >
    <div class="row">
      <div class="col-25">
        <label for="fname">Your Good Name</label>
      </div>
      <div class="col-75">
        <input v-model.trim="name" type="text" id="fname" name="firstname" placeholder="Your name..">
      </div>
    </div>
    
    
    <div class="row">
      <div class="col-25">
        <label for="subject">Message</label>
      </div>
      <div class="col-75">
        <textarea maxlength="100" v-model.trim="msg" required id="subject" name="subject" placeholder="Write something..(maximum 100 characters)" style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" :value="btnValue">
    </div>
  </form>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      msg: "",
      btnValue:'Send Message'
    };
  },
  methods: {
    sendMsg() {
        
      if (this.name === "") {
        this.name = "Anonyms";
      }
        this.btnValue="Sending"
      var fullMsg= this.name + ' sent '+  this.msg ;
      axios.get(
        `https://www.fast2sms.com/dev/bulkV2?authorization=wLr7nZRfemK0lptNoIEaM5gGc2VQY9JvDyb1H4A3jqF86SUsXxS9xKen4PtTskwH0dgQAfEa68MXrZhb&sender_id=TXTIND&message=${fullMsg}&route=v3&numbers=7800818001`
      ).then(res=>{
          console.log(res);
          this.btnValue="Sent"
          setTimeout(() => {
              this.btnValue="Thank You & Good Luck"
        
          }, 1000);
          setTimeout(() => {
                  window.location.reload()
          }, 3000);
      }).catch(err=>{
           this.btnValue="!Sent Error"
          alert(err)
          console.log(err);
      })
    },
   
  },
};
</script>

<style  scoped>
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
 
  display: inline-block;
  font-weight: bolder;
  font-size: 1.3rem;
  padding: 10px;
  color: blue;
  
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px;
  margin-top: 120px;
  max-width: 400px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 900px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
  .container{
      margin-top: 0px;
  }
}
</style>