<template>
    <div class="faq spacing">
       <div class="section">
           <h2 class="capitalize">support</h2>
           <p class="text bg-purple-dull m-t"> If you don't find the answer to your problem below. you can send us an email at <span class="c-green-bright">support@jujucase.com</span></p>
       </div>
       <div class="section">
           <h2 class="capitalize">business inquiry</h2>
           <p class="text bg-purple-dull m-t"> If you are a youtuber with over 500 subs and 2500 views on video, a website with over 1000 daily visitors or if you have any different
               partnership to offer, please contact us at <span class="c-green-bright">business@jujucase.com</span></p>
       </div>
       <div class="section">
           <h2 class="capitalize">bug reports</h2>
           <p class="text bg-purple-dull m-t">As we are in Beta, we expect bugs to appear. If you find any, please report at <span class="c-green-bright">support@jujucase.com</span> 
           and you might be awarded depending on how important the bug is</p>
       </div>
       <div class="section">
           <h2 class="capitalize">live chat</h2>
           <p class="text bg-purple-dull m-t"> We also have a <span class="c-green-bright">Discord Server</span> where wew offer live support</p>
       </div>
       <div class="section">
           <h2 class="capitalize">how can i open cases?</h2>
           <p class="text bg-purple-dull m-t"> Press Deposit on top bar and pay with cash or deposit skins directly. Then go to any case you can afford and press open case.</p>
       </div>
    </div>
</template>
<script>
export default {
    name: 'faq',
}
</script>
<style lang="scss">
.faq{
    .section{
        margin-bottom: 50px;
        .text{
            font-size: 16px;
            padding: 25px;
            line-height: 2rem;
            span{ 
                font-size:  18px;
                font-family: 'jujucase-medium'
            }
        }
    }
}
</style>
