<template>
    <div>
<header>
  <nav>
      <ul>
          <li><img height="80" src="../assets/logo.png" alt="" srcset=""></li>
          <li><a href="https://twitter.com/YourVueJS">Join Us <img src="../assets/smallmic.png" alt="" srcset=""></a></li>
          <!-- <li><a href="http://">Feedback</a></li> -->
      </ul>
  </nav>
</header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
header{
    height: 80px;
    width: 98vw;
    /* background: linear-gradient(230deg,rgb(202, 202, 202), rgb(255, 255, 255)); */
  box-shadow: 4px 6px 4px gray;
 
}
nav ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;

}
nav ul li{
    font-size: 2rem;
   
}
nav ul li a{
    text-decoration: none;
    color: black;
    font-weight: bolder;

}
nav ul li a:hover{
  
    color: rgb(114, 114, 114);
    

}

@media screen and (max-width: 900px) {
    nav ul li{
    font-size: 1rem;
   
}
}
</style>