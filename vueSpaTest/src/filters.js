import utils from './libs/utils'

const filters = {};

export default filters

filters.formatDate = (date, format) => utils.formatDate(date, format)


filters.truncate = (value, len) => {
	return (value||'').substring(0, len);
}

filters.stripHtml = (val) => {
	return (val||'').replace(/<[^>]*>/g,'')
}
