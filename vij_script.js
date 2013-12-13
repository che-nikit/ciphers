function main(a) {
    var word = document.getElementById("b_text1").value,
        res = document.getElementById("b_text2"),
		key = document.getElementById("b_text3").value,
		b = " !.,?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        e = "",
        f,tmp = "",
		arr = new Array(word.length),
		arr2 = new Array(word.length);
	if(key.length!=0)
	{
		while(tmp.length < word.length)
			tmp += key;
		key = tmp;
		if(key.length > b.length)
			key = key.substr(0,word.length);
		for(i = 0;i < word.length; i++)
		{
			arr[i] = b.lastIndexOf(key.charAt(i));
			if(arr[i] == -1)
				arr[i] = 0;
		}
		for(i = 0;i < word.length; i++)
		{
			arr2[i] = b.lastIndexOf(word.charAt(i));
			if(arr2[i] == -1)
				arr2[i] = 0;
		}
		for(i = 0;i < word.length; i++)
		{
			if(a == 0)
			arr[i]=encode(arr[i], arr2[i], b.length)
			else
			{
			arr[i]=decode(arr[i], arr2[i], b.length)
			}
			e += b.charAt(arr[i]);
		}
		res.value = e;
	}
	else 
	{
		res.value="";
		alert("Введите ключ!");
	}
};
function encode(arr, arr2, bl){
	arr += arr2;
	if(arr > bl-1)
		arr -= bl;
	return arr;
};
function decode(arr, arr2, bl){
	arr = arr2 - arr;
	if(arr < 0)
		arr += bl;
	return arr;
};
