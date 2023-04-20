import { defineStore } from "pinia";
import axios from 'axios'

export const useFootballStore = defineStore('useFootball', {
  state: () => ({
    url: 'https://c78f8cbc-ead9-4cfd-acea-6b4d4b2972b0.mock.pstmn.io/filter-results?tournment_id=2'
  }),
  actions: {
    async getMatcheUpdates () {
      try {
        const res = await axios(this.url)
        return await res.data.data
      }
      catch (err) {
        console.log(err.response.data.message)
      }
    }
  }
})
