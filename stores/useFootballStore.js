import { defineStore } from "pinia";
import axios from 'axios'

export const useFootballStore = defineStore('useFootball', {
  //state: () => ({ }),
  actions: {

    async getMatcheUpdates () {
      try {
        const url = 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/filter-results?tournment_id=2'

        const res = await axios(url)
        return await res.data.data
      }
      catch (err) {
        return err.response.data.message
      }
    },

   async getStadium () {
      try {
        const url = 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/get-stadium' 

        const res = await axios(url)
        return await res.data.data
      }
      catch (err) {
        return err.response.data.message
      }
   }
  }
})
