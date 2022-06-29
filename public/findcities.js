function initAutocomplete()
{
	// Overrides the default autocomplete filter function to search only from the beginning of the string
	$.ui.autocomplete.filter = function (array, term) {
			var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
			return $.grep(array, function (value) {
					return matcher.test(value.label || value.value || value);
			});
	};				
	//Init autocomplete
	$("#city").autocomplete({
		minLength: 3,
		delay: 150,
		select: function(event,ui){ 
			$("#city").attr("value",ui.item.value); 
			$("#city").val(ui.item.value); 
			$("#city").change();
		}
	});
};