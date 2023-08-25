import mapboxgl from 'mapbox-gl';

import { markRaw } from 'vue';

export default {
    async onLoad() {
        wwLib.wwVariable.updateValue(`${this.id}-mapboxgl`, markRaw(mapboxgl));
    },
};
