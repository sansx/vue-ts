<template lang="pug">
div.contain
    el-row
        el-col

</template>




<script>
export default {
    data(){
        return {
            items:""
        }
    },
    created(){
        this.$http.get("/api/coming_soon")
        .then(res=>{
            //console.log(res)
            this.$http.get(`/api/coming_soon?count=${res.data.total}`)
            .then(res=>{
                console.log(res)
            })
        })
    },
    methods:{
        
    }
}
</script>


<style lang="scss" scoped>

</style>

