import { defineStore } from "pinia";
import * as api from "../api/api";

const DEVICE_API_BASE_URL = 'https://api.restful-api.dev/objects';


export const useDeviceStore = defineStore("Device", {
  state: () => ({
    Devices: []
  }),
  getters: {
    getDevices: (state) => state.Devices,
  },
  actions: {
    async fetchDevices() {
      try {
        const data = await fetch(DEVICE_API_BASE_URL);
        const devices = await data.json()
        this.Devices = devices
        console.log(this.Devices)
      } catch (error) {
        console.error("Error in store fetching Device breeds:", error);
        throw error;
      }
      },
      async deleteDevice(deviceID) {
        try {
          console.log(deviceID);
          const response = await fetch(`${DEVICE_API_BASE_URL}/${deviceID}`, {
            method: 'DELETE',
          });
      
          console.log(response);
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          console.log('Device deleted successfully');
          await this.fetchDevices();
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
      },
    async changeDevice(deviceID, updatedData){
      try {
        const response = await fetch(DEVICE_API_BASE_URL,`/${deviceID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData) 
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        const result = await response.json();
        console.log(result);
        await this.fetchDevices();
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
  },
});
