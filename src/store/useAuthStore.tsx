import {create} from 'zustand'

export const useAuthStore=create((set,get)=>({
     authUser:null
}))