const isPhone = () => {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        return true;
    } else {
        // код для обычных устройств
        return false;
    }

}

export default isPhone;