import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'โซดา', img: 'https://i.pinimg.com/474x/97/8f/23/978f23dd7f7563865e62ae024891a123.jpg', price: 20 },
    { name: 'น้ำแข็ง', img: 'https://i.pinimg.com/474x/e7/6f/38/e76f3820b74ee71061ce9c0a2db06768.jpg', price: 30 },
    { name: 'SANGSOM', img: 'https://b2b.cvm-center.com/web/image/product.template/7076/image', price: 190 },
    { name: 'น้ำเปล่า', img: 'https://www.singhapattanachiangmai.com/wp-content/uploads/2016/02/water500ml.jpg', price: 20 },
    { name: 'โค้ก', img: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/10/88/8851959222010/8851959222010_3-20230116164902-.jpg', price: 25 },
    { name: 'เอส', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsjELcKqg9-NiXZUOQApTYZnVyTops9Zo3AoqKouxV324jg-YXPOSXrTIqD6WkoampTY&usqp=CAU', price: 20 },
    { name: 'สไปร์ท', img: 'https://backend.tops.co.th/media/catalog/product/8/8/8851959122365_02-02-2022.jpg', price: 25 },
    { name: 'สิงห์เลม่อน', img: 'https://down-th.img.susercontent.com/file/6dcb2f935c59bd116fb216c4ec14cfff', price: 20 },
    { name: 'บักเก็ต', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsq5lisODYa7gP1D4H_tp9yTRg1Us03GBo8PEZvJ11gaF8sgvAost0xodw3TnzES-fMTg&usqp=CAU', price: 199 },
    { name: 'BLEN 285', img: 'https://static.wixstatic.com/media/4066a7_4d1f716d1051482983c6dadf137bc241~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg', price: 350 },
    { name: 'Smirnoff Midnight', img: 'https://file.bungki.com/eyJidWNrZXQiOiJidW5na2kiLCJrZXkiOiJwdWJsaWMvc3RhdGljcy9pbWFnZXMvcHJvZHVjdHMvMjA2OTEvYi8yMDIyMDcxODE1MTQzNl8xNjU4MTMyMDc2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjEwMjQsImhlaWdodCI6MTAyNCwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=', price: 450 },
    { name: 'เบียร์ช้าง 1 โปร', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSETv4DQf0wz4kMtP9GlitJZxIi4SUky8cXg&usqp=CAU', price: 249 },

  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
