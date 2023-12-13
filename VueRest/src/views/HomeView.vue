<script>
import { useDeviceStore } from "@/stores/devices";
export default {
  data() {
    return {
      deviceStore: useDeviceStore(),
      updatedData: {
        name: "Apple Macbook Pro", 
        data: {
          'year': 2019,
          'price': 2049.99,
          'CPU model': "Intel Core i9",
          'Hard disk size': "1 TB",
          'color': "silver"
   }
      },
    saveChanges() {
      if (this.selectedDeviceId) {
        this.deviceStore.changeDevice(this.selectedDeviceId, this.updatedData);
      }
    },
    };
  },
  created() {
    try {
      this.deviceStore.fetchDevices();
    } catch (error) {
      alert(error.message);
    }
  }
};
</script>

<template>
  <div>
    <h1>RANDOM DEVICES APP</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr :value="device"
          v-for="device in deviceStore.getDevices"
          :key="device.id">
          <th>{{ device.id }}</th>
          <th> {{ device.name }}</th>
          <th><button @click = 'this.deviceStore.changeDevice(device.id, this.updatedData)'>CHANGE</button></th>
          <th><button @click = 'consultDevice(device.id)'>CONSULT</button></th>
          <th><button @click = 'this.deviceStore.deleteDevice(device.id)'>DELETE</button></th>
        </tr>
      </tbody>
    </table>

    
  </div>
</template>
