import { defineStore } from "pinia";
import * as api from "../api/api";

const DEVICE_API_BASE_URL = 'https://api.restful-api.dev';
class Device {
  constructor(id, name, data){
    this.id = id,
    this.name = name,
    this.data = data
  }
};

export const useDeviceStore = defineStore("device", {
  state: () => ({
    deviceList: [],
    
  }),
  getters: {
    getDevices: (state) => state.deviceList,
  },
  
  actions: {
    async fetchDevices() {
      try {
        
        const devices = await api.get(DEVICE_API_BASE_URL, 'objects');
        devices.forEach((device) => {
          const deviceInfo = new Device(
            device.id,
            device.name,
            device.data
          );
          this.deviceList.push(deviceInfo)
          
        })
      } catch (error) {
        console.error("Error in store fetching data:", error);
        throw error;
      }
    },
    async createDevice(newDeviceData){
      try{

        const response = await api.post(DEVICE_API_BASE_URL, 'objects', newDeviceData)

      const deviceInfo = new Device(
        response.id,
        response.name,
        response.data
      )
      this.deviceList.push(deviceInfo)
    } catch (error) {
      console.error("Error in store creating device:", error);
      throw error;
    }
  },
  async deleteDevice(id){
    try{
      const device = await api.get(DEVICE_API_BASE_URL, 'objects')
      console.log(device)
      const filteredDevices  = device.filter(dev => dev.id === id)
      console.log(filteredDevices)
    }
    catch (error){
      console.error('Error deleting device from API: ', error);
    }
  }
},
});