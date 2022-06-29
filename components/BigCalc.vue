<template>
  <div>
    <Header title="<em class=&quot;italics&quot;>Раскодируйте</em> дату своего рождения<br>и <em class=&quot;italics&quot;>узнайте о себе всё!</em>" subtitle="" image="bigCalc.png" />
    <iframe id="iframe" style="width: 99vw; height: calc(1200px + 100vh); border: none; overflow: hidden;" src="http://localhost:8080/api/calc/getMain" />
  </div>
</template>
