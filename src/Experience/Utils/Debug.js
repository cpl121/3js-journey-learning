import Experience from '../Experience.js'
import * as THREE from 'three'
import GUI from 'lil-gui'

export default class Floor {
    constructor() {
        this.active = window.location.hash === '#debug'

        if (this.active) {            
            this.ui = new GUI()
        }
    }
}