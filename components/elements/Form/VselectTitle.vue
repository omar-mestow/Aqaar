<template>
    <div class="form-floating mb-3">    
      <VField 
        :name="name" 
        v-slot="{ value }" 
        class="form-control just-bottom-border"
        :style="`border-bottom: 1px solid #${border_color};color: #${color};`"
        :id="id"
        as="select">
          <option value="" disabled>{{placeholder}}
            <!-- <span style="font-size: 10px;" v-if="astricts == 'true' ?? false" class="astricts">Required fields</span> -->
            <!-- <span style="font-size: 10px;" v-if="astricts == 'false' ?? false" class="astricts">Optional fields </span> -->
          </option>
          <!-- <option v-for="item in items" :key="item" :value="item" :selected="value && value.includes(item)">{{ useTranslate(item, 'Name') }}</option> -->
          <option v-for="item in items" :key="item" :value="item.id" :selected="value && value == item.id">{{ item.name }}</option>
        </VField>
        <VErrorMessage :name="name" as="div" class="help is-invalid" />
      <label :for="id" :style="`color: #${color}`" class="form-label" v-if="label">
        {{ label }}
        <!-- <span v-if="astricts == 'true' ?? false" class="astricts">Required fields</span> -->
        <!-- <span v-if="astricts == 'false' ?? false" class="astricts">Optional fields </span> -->
      </label>
    </div>
  </template>
  
  <script setup>
      const { apiBase, api } = useRuntimeConfig();
      const props = defineProps({
        items: {
          required: true
        },
        name: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          default: "text",
          required: true,
        },
        label: {
          type: String
        },
        placeholder: {
          type: String,
          default: "",
        },
        border_color: {
            type: String,
            default: `000`
          },
          color: {
            type: String,
            default: `000`
          },
          
      });
  
  
  </script>
  
  <style lang="scss" scoped>
    input { 
      &.rtl { direction: rtl; }
     }
     .form-floating > label { 
        &.rtl { right: 0; left: unset; }
     }
      .form-check-input:focus { box-shadow: none; }
      .form-check > label { color: #aaa; }
      .form-floating > label { color: #aaa; }
      .form-control {
        height: 54px;
        border: none;
        // border-bottom: 1px solid #46cc11;
        border-radius: 0px;
        outline: none;
        box-shadow: none; 
        background-color: transparent;
        // color: #07c85b;
      }
      .help.is-invalid { letter-spacing: .03rem; }
    .form-control:focus,
    .form-control.is-invalid:focus, 
    .was-validated .form-control:invalid:focus {
      box-shadow: none;
    }
  
    .just-bottom-border {
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }
  
    .help {
      margin-top: 10px;
      &.is-invalid {
        color: #dc3545;
      }
    }
    .form-control.rtl.is-valid, 
    .was-validated .rtl.form-control:valid,
    .form-control.rtl.is-invalid, 
    .was-validated .rtl.form-control:invalid {
      background-position: left calc(.375em + .1875rem) center;
    }
  
    
  
  </style>