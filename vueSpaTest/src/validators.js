const validators = {};

export default validators

validators.email = (val) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

validators.numeric = (val) => /^[-+]?[0-9]+$/.test(val)

validators.url = (val) => /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)

validators.mobile = (val) => /^1\d{10}$/.test(val.trim())

validators.password = (val) => /^\S{6,16}$/.test(val)