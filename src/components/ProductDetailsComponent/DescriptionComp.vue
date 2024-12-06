<template>
  <div v-if="isDropdowenVisable" class="mt-5 mb-5">
    <div v-for="(descrip , index) in types" :key="index" class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">{{ descrip.detail_name }}:</p>
      <p class="col-span-6 text-sm">{{ descrip.detail_value }}</p>
    </div>

    <!-- <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">لون:</p>
      <p class="col-span-6 text-sm">لون شامباني</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">تفاصيل:</p>
      <p class="col-span-6 text-sm">عارية الذراعين صليب</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">اصناف التصميم:</p>
      <p class="col-span-6 text-sm">نباتات</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">نوع:</p>
      <p class="col-span-6 text-sm">تنورة نوم</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">خط العنق:</p>
      <p class="col-span-6 text-sm">الاشرطة السباغتي</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm">طول الاكمام:</p>
      <p class="col-span-6 text-sm">بدون اكمام</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">الطول:</p>
      <p class="col-span-6 text-sm">ميني</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">نوع الشكل:</p>
      <p class="col-span-6 text-sm">النمط العادي</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">النوم:</p>
      <p class="col-span-6 text-sm">مراهقة</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">قماش :</p>
      <p class="col-span-6 text-sm">غير متمدد</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">المواد:</p>
      <p class="col-span-6 text-sm">الستان</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">تكوين:</p>
      <p class="col-span-6 text-sm">7% بوليسر , </p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">ارشادات العنابة:</p>
      <p class="col-span-6 text-sm">غسيل يدوي لا يستخدم التنظيف الجاف</p>
    </div>
    <div class="grid grid-cols-12">
      <p class="col-span-6 text-sm ">شفاف:</p>
      <p class="col-span-6 text-sm">لا</p>
    </div> -->


  </div>
</template>


<script setup>
defineProps({
  isDropdowenVisable: {
    type: Boolean,
    default: false,
    required: true,
  },

  types: {
    type: [],
    default: [],
  },
});
</script>
