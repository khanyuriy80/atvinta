<template>
<header class="page-header">
        <a href="#" class="page-header-logo">
            <img src="img/header-logo.svg" alt="logo">
            <div class="page-header-logo-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </a>

        <button class="page-header-btn">Произвести биоробота</button>
    </header>
</template>

<script>


export default {
  name: 'Header',
}
</script>

<style>
.page-header {
    max-width: 1016px;
    width: 100%;
    height: 144px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.page-header-logo {
    display: flex;
    align-items: center;
}

.page-header-logo-dots {
    display: flex;
}

.dot {
    display: block;
    width: 9px;
    height: 9px;
    background: #FF7F22;
    border-radius: 50%;
    margin: 0 6px 0 0;
}

.page-header-btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px; 
    color: #FFFFFF;
    border: 2px solid #FF7F22;
    box-sizing: border-box;
    border-radius: 60px;
    background: #24303D;
    padding: 12px;
}
.page-header-btn:hover {
    background: #FF5722;
    border: 3px solid #FF5722;
}

.page-header-btn:active {
    background: #FF7F22;
    border: 3px solid #FF7F22;
}
</style>
