<script>
import {useDeviceStore} from '@/stores/device'
import {RouterLink} from 'vue-router';

export default {
  data(){
    return {
      deviceStore: useDeviceStore(),
      device: {
        id: '',
        name: 'HP victus',
        data: {color: 'black', capacity:'512GB'}
      }
    };
  },
  async created(){

    try{
      this.deviceStore.fetchDevices();

      const lastDevice = this.deviceStore.getDevices.slice(-1)[0];
      const lastId = lastDevice ? lastDevice.id: 0
      this.device.id =lastId
      await this.createDevice();
    } catch (error) {
      alert(error.message)
    }

    this.createDevice()

  },
  methods: {
    async createDevice(){
      try{
      await this.deviceStore.createDevice(this.device)
    } catch (error) {
      alert(error.message)
    }
    },
    removeDevice(id){
      try{
        if (confirm('Your really want to delete this device?')){
        this.deviceStore.deleteDevice(id)
         this.deviceStore.fetchDevices();
      }
      }
      catch(error){
            alert(`Error deleting device: ${error.message}`);
      }
    }

  }
}
</script>

<template>
<table>
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>DATA</th>
    <th>CHANGE</th>
    <th>REMOVE</th>
  </tr>
  <tr v-for="device in deviceStore.getDevices" :key="device">
        <td>{{ device.id }}</td>
        <td>{{ device.name }}</td>
        <td>{{ device.data }}</td>
        <td><button @click="changeDevice(device.id)">CHANGE</button></td>
        <td><button @click="removeDevice(device.id)">REMOVE</button></td>
    </tr>
  </table>

</template>
