import mapboxgl from 'mapbox-gl';
export default {
    async onLoad() {
        wwLib.wwVariable.updateValue(`${this.id}-mapboxgl`, mapboxgl);
    },
}
