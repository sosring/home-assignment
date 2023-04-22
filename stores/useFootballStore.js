import { defineStore } from "pinia";
import axios from 'axios'

export const useFootballStore = defineStore('useFootball', {
  state: () => ({ 
    url: 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io' 
  }),
  actions: {

    async getMatcheUpdates () {
      try {
        const res = await axios(`${this.url}/filter-results?tournment_id=2`)
        return await res.data.data
      }
      catch (err) {
        return 'Something went wrong!'
      }
    },
   
   async getFilteredResults () {
      try {
        const res = await axios(`${this.url}/filter`)
        return await res.data.data
      }
      catch (err) {
        return 'Something went wrong!'
      }
   },

   async getStadium () {
      try {
        const res = await axios(`${this.url}/get-stadium`)
        return await res.data.data
      }
      catch (err) {
        return 'Something went wrong!'
      }
   },

   async getNearbyStadiums () {
      try {
        const res = await axios(`${this.url}/get-nearby-teams`)
        return await res.data.data
      }
      catch (err) {
        return 'Something went wrong!'
      }
   },

   async getNearbyTeams () {
      try {
        const res = await axios(`${this.url}/get-nearby-stadiums`)
        return await res.data.data
      }
      catch (err) {
        return 'Something went wrong!'
      }
   }
  }
})
