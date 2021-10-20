<template>
<section class="banner">
            <div class="banner-txt">
                <p class="banner-txt-title">Фабрика по производству биороботов</p>
                <p class="banner-txt-subtitle">класса «монитор-кресло»</p>
            </div>

            <div class="banner-logo">
                <span class="banner-logo-bgr"></span>

                <div class="banner-logo-robots">
                    <img src="img/banner-robot-1.png">
                    <img src="img/banner-robot-2.png">
                </div>
            </div>
        </section>
</template>

<script>


export default {
  name: 'Banner',
}
</script>

<style>
.banner {
    max-width: 886px;
    width: 100%;
    margin: 0 auto;
    margin-top: 72px;
    display: flex;
    position: relative;
    min-height: 406px;
}

.banner-txt {
    margin: 0 50px 0 0;
}

.banner-txt-title {
    font-weight: 600;
    font-size: 56px;
    line-height: 72px;
    color: #FFFFFF;
    width: 470px;
    margin: 0 0 24px 0;
}

.banner-txt-subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #A3B8CC;
}

.banner-logo-bgr {
    display: block;
    width: 275px;
    height: 275px;
    border-radius: 50%;
    background: #1E2936;
}

.banner-logo-robots {
    position: absolute;
    top: 0px;
}
</style>
