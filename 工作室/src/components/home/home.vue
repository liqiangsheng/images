<template>
  <div id="home">
     <div class="homeBox">
         <div class="header">
           <video  width="375" height="200" controls src="http://ips.ifeng.com/video19.ifeng.com/video09/2016/12/05/1029143-102-009-165857.mp4?vid=3b623fed-05bd-458e-8bbf-dc5c7418280b&uid=1534296706556_mzpfh95102&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=%E8%A2%8B%E9%BC%A0%E5%A8%B1%E4%B9%90&cat=55-71&ptype=55&platform=pc&sourceType=h5&dt=1480639331000&gid=X2c_UWkvmzuR&sign=86fec6f9cc8f4919fda516cdce86b946&tm=1551281896338"></video>
         </div>
       <ul class="ul">
         <li v-for="(item,index) in tabList" @click="tabClick(1)" :key="index">
           <img v-show="index==1" src="/static/images/baobao%20(4).png" alt="">
           <span :class="{active:index==tabIndex}">{{item}}</span>
           <b v-show="index==1">843</b>
         </li>
       </ul>
         <div class="content">
            <div class="content_title">
               <div class="content_title_header">
                 <h5>在抖音上火爆的运动缩阴法，7天就能解决你的阴吹问题 <span>（315612播放）</span></h5>
                 <div>简介 <img src="/static/images/baobao2.png" alt=""></div>
               </div>
              <ul>
                <li><img src="/static/images/baobao3.png" alt=""></li>
                <li>　热度6542　.</li>
                <li>　女性健康　.</li>
                <li>　教学</li>
              </ul>
            </div>
           <div class="marvellous">精彩评论 <span>(43)</span></div>
           <ul class="comment">
             <li v-for="(item,index) in obj">
               <div class="obj_left">
                 <img :src="item.headImg" alt="">
               </div>
               <div class="obj_right">
                 <div class="obj_right_title">
                   <div class="h5">{{item.name}} <img src="/static/images/zan1.png" alt=""></div>
                   <p>{{item.time}}</p>
                   <div class="obj_right_zan">
                     {{item.num}}
                     <img src="/static/images/zan.png" alt="">
                   </div>
                 </div>
                 <p class="p">{{item.value}} <img :src="item.img" v-if="item.img" alt=""></p>
                 <div class="child" v-if="item.child" v-for="item1 in item.child">
                   <span>{{item1.name}}</span>:{{item1.value}}
                 </div>
               </div>

             </li>
           </ul>
         </div>
     </div>

  </div>
</template>

<script>
  export default {
  data(){
    return{
      tabList:['视频','泡泡'],
      tabIndex:0,
      obj:[
        {headImg:'/static/images/1.png',name:'幸福',time:"2018-10-27",value:"我生完孩子以后，每次和老公同房就没有高潮过。后来我通过学习这位老师教的方法，高潮次数比以前明显多了很多，老公也越来越爱我",num:'544',img:'/static/images/baobei.png',child:[
          {name:'精致的猪猪女孩',value:'我结婚了，还没生小孩，同房次数挺多，刚加了老师，可以通过'}
        ]},
        {headImg:'/static/images/2.png',name:'心晴',time:"2018-10-27",value:"我也加了老师，她很详细地给我分析了问题产生的原因，然后给我发了训练的视频，刚开始的那几天一直学不会方法她就很耐心地给我指导，直到我学会，真的太专业太负责任了!",num:'642'},
        {headImg:'/static/images/3.png',name:'春泥',time:"2018-10-27",value:"我生完孩子以后也出现了阴道松弛、盆底松弛等问题，经常憋不住尿真的是很尴尬，用过很多药也学过很多方法，但还是反反复复的，直到加了老师详细咨询后，我才知道原来改善这些问题还能这么轻松。补充一下，老师真的很好，很专业，很温柔，教的方法很全！",num:'345'},
        {headImg:'/static/images/4.png',name:'精致的猪猪女孩',time:"2018-10-27",value:"我结了婚，还没生孩子，同房次数挺多的，刚加了老师，可以通过…",num:'66'},
        {headImg:'/static/images/5.png',name:'习惯被宠',time:"2018-10-26",value:"我现在孕期九个月，要是生完孩子真的像你们说的那样，怎么办啊?千万不要出现在我的身上，我先看下教学！",num:'543',img:'/static/images/daduzi.jpg'},
        {headImg:'/static/images/6.png',name:'开心鸭',time:"2018-10-26",value:"原来这么多和我有一样问题的人，现在才知道有这种方法可以改善的，我要加老师学习！",num:'41'},
        {headImg:'/static/images/7.png',name:'当我长发及腰',time:"2018-10-26",value:"问下，咨询老师要收钱不？",num:'80'},
        {headImg:'/static/images/8.png',name:'逐爱',time:"2018--8-29",value:"我也加老师了，我就是按照她教的视频方法调理好的。以前怕同房，现在是追着老公要爱爱呢，主动一点老公更宠爱！",num:'21'},
        {headImg:'/static/images/9.png',name:'平淡如水',time:"2018--8-29",value:"我生完2个孩子以后，阴道就变得松松垮垮的，每次同房老公都说没感觉。看到朋友们都说这个老师教的方法好，我也加了，期待效果！",num:'68'},
        {headImg:'/static/images/10.png',name:'梦里花',time:"2018--8-26",value:"按照老师视频中教的方法训练了半个月以后，阴吹的问题没有了，紧致了许多。老师教的方法我会照着继续做的！",num:'241'},
        {headImg:'/static/images/11.png',name:'轻语',time:"2018--8-26",value:"男朋友总是嫌和我爱爱时有尴尬的噗嗤声，后来加了老师学会训练方法以后这种情况明显少了很多，太开心啦",num:'15'},
        {headImg:'/static/images/12.png',name:'小宝贝',time:"2018--8-26",value:"为男朋友多次怀孕流畅，结果阴道松了，也有了各种妇科炎症，男友不喜欢碰我了，怎么办",num:'18',child:[
          {name:'17曽贰儿',value:'哎，我和你一样，还没有结婚，和男朋友爱爱多了，现在男朋友都不怎么碰我了'}
        ]},
        {headImg:'/static/images/13.png',name:'潇洒小姐',time:"2018--8-26",value:"老师真的好忙啊，我昨晚加的，刚刚才通过。期待效果！",num:'94'},
        {headImg:'/static/images/14.png',name:'红日',time:"2018--8-26",value:"朋友们训练后记得说下自己的体验啊，我也想学！",num:'48'},
        {headImg:'/static/images/15.png',name:'烟雨',time:"2018--8-24",value:"我昨天开始学的课，刚学一天还感觉不到效果，会坚持一段时间的",num:'42'},
        {headImg:'/static/images/16.png',name:'当爱已成往事',time:"2018-8-24",value:"大家都学得怎么样了啊？有效果没？",num:'35'},
        {headImg:'/static/images/17.png',name:'轻舞飞扬',time:"2018-8-20",value:"我训练了大概一个月后感觉效",num:'16'},
        {headImg:'/static/images/18.png',name:'约定',time:"2018-8-20",value:"我也开始学啦，过些天和大家分享心得",num:'9'},
        {headImg:'/static/images/19.png',name:'知否知否',time:"2018-8-20",value:"老师教的怎么样啊？会不会很难懂啊？",num:'7'},
        {headImg:'/static/images/20.png',name:'轻舞飞扬',time:"2018-8-18",value:"不会啊，老师教的方法很容易上手，我听一遍就能明白了",num:'6'},
        {headImg:'/static/images/21.png',name:'剪爱',time:"2018-6-09",value:"嗯嗯，我也这样觉得，老师教的方法真的很实用，阴吹、妇科炎症什么的真的改善了很多！我老公现在爱我爱得不行，要知道之前他对我都是冷言冷语的！",num:'3'},
        {headImg:'/static/images/5.png',name:'玫瑰人生',time:"2018-5-14",value:"我之前就有性冷淡的问题，每次同房就像完成任务一样。感谢老师教的方法，让我和老公的感情恢复到恩爱如初！有需要的姐妹们一定要加这位老师，效果真的太好啦！",num:'288',img:'/static/images/kaixing.jpg'},
        {headImg:'/static/images/13.png',name:'海燕',time:"2018-5-01",value:"看完大家的经历以后才知道自己走了很多弯路，我现在就加老师好好学习！",num:'19'},
      ]
    }
  },
  watch:{

  },
  created() {

  },
    methods:{
    tabClick(i){
    }
  }
}

</script>

<style scoped lang="less">
#home {
  position: absolute;
  left:0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #ffffff;
  overflow: hidden;
  >.homeBox{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    >.header{
      width: 100%;
      height: 2.35rem;
      video{
        width:100%;
        height: 2.35rem;
        background: #000000;
      }
    }
    >.ul{
      width: 100%;
      height: 0.42rem;
      background: #ffffff;
      border-bottom: 0.01rem solid #eeeeee;
      display: flex;
      li{
        flex: 1;
        text-align: center;
        font-family: '微软雅黑';
        font-size: 0.14rem;
        img{
          display: inline-block;
          width: 0.26rem;
          height: 0.26rem;
          transform: translateY(0.05rem);
        }
        span{
          line-height: 0.3rem;
          display: inline-block;
          margin-top: 0.05rem;
        }
        span.active{
          color: mediumspringgreen;
          border-bottom: 0.04rem solid mediumspringgreen;
        }
        b{
          font-weight: 100;
        }
      }
    }
    >.content{
      position: absolute;
      left: 0;
      top: 2.77rem;
      bottom: 0;
      right: 0;
      overflow-y: scroll;
      >.content_title{
        width: 100%;
        height: 1.1rem;
        padding: 0.2rem 0.15rem;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #eeeeee;
        .content_title_header{
          width: 100%;
          display: flex;
          >h5{
            width: 2.7rem;
            font-size: 0.16rem;
            font-weight: 600;
            line-height: 0.21rem;
            span{
              font-size: 0.13rem;
              color: #969696;
            }
          }
          >div{
            flex: 1;
            text-align: right;
            img{
              display: inline-block;
              width: 0.1rem;
              height: 0.1rem;
              transform: rotate(180deg);
              margin-top: 0.05rem;

            }
          }
        }
        >ul{
          overflow: hidden;
          margin-top: 0.05rem;
          li{
            float: left;
            img{
              display: block;
              width: 0.2rem;
              height: 0.2rem;
            }
          }
        }
      }
      >.marvellous{
        width: 100%;
        padding: 0 0.15rem;
        box-sizing: border-box;
        font-size: 0.16rem;
        font-weight: 600;
        line-height: 0.35rem;
        span{
          font-size: 0.14rem;
          color: #969696;
        }

      }
      >.comment{
        width: 100%;
        li{
          width: 100%;
          display: flex;
          padding: 0.15rem;
          box-sizing: border-box;
          .obj_left{
            width:0.35rem ;
            margin-right: 0.05rem;
            img{
              display: block;
              width: 0.35rem;
              height: 0.35rem;
              border-radius: 50%;
            }
          }
          .obj_right{
            flex: 1;
            position: relative;
            .h5{
              font-size: 0.14rem;
              font-weight: 600;
              line-height: 0.2rem;
              box-sizing: border-box;
              img{
                display: inline-block;
                width: 0.15rem;
                height: 0.15rem;
                transform: translateY(0.02rem);
              }
            }
            p{
              font-size: 0.12rem;
              color: #969696;
            }
            .obj_right_zan{
              position: absolute;
              right: 0;
              top:0.1rem;
              font-size: 0.14rem;
              color: #969696;
              line-height: 0.2rem;
              img{
                display: inline-block;
                width: 0.15rem;
                height: 0.15rem;
              }
            }
            >.p{
               margin-top: 0.15rem;
              font-size: 0.14rem;
              color: #262626;
              line-height: 0.26rem;
              letter-spacing: 0.01rem;
              img{
                display: block;
                width: 2rem;
                margin-top: 0.1rem;
              }
            }
            .child{
              width: 100%;
              padding: 0.15rem;
              background: #eeeeee;
              border-radius: 0.05rem;
              box-sizing: border-box;
              margin-top: 0.15rem;
              line-height: 0.2rem;
              letter-spacing: 0.01rem;
              font-size: 0.14rem;
              span{
                color: #969696;
              }
            }
          }
        }
      }
    }
  }
}
</style>
