<template>
  <div>
    <div class="show-coor">
      <div>
        <h3>Your Coordinates:</h3>
        <p>{{ (myCoordinates.lat).toFixed(4) }} latitude, {{ (myCoordinates.lng).toFixed(4) }} longitude</p>
      </div>
      <!-- <div>
        <h3>Destination Coordinates:</h3>
        <p>{{ destinationCoordinates.lat }} latitude, {{ destinationCoordinates.lng }} longitude</p>
      </div> -->
    </div>
    <GmapMap
      :center="myCoordinates"
      :zoom="17"
      style="width: 640px; height: 360px; margin: 32px auto;"
      ref="mapRef"
    ></GmapMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      }
    }
  },
  created () {
    this.$getLocation({})
      .then(coordinates => {
        this.myCoordinates = coordinates
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted () {
    this.$refs.mapRef.this.$mapPromise
      .then(map => {
        this.map = map
      })
  },
  computed: {
    destinationCoordinates () {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        }
      }
      return {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      }
    }
  }
}
</script>

<style scope>
.show-coor {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
