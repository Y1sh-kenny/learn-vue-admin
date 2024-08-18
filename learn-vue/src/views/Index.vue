<template>
    Index
</template>

<script>
const ENV = import.meta.env;
export default{
    name:'Index',
    setup(){
        console.log('ENV',ENV);
    }
}
</script>