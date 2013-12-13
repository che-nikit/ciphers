function main(a) {
    var c = document.getElementById("b_text1"),
        g = document.getElementById("b_text2"),
		d = document.getElementById("b_text3").value,
		b = " !.,?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        e = "",
		f,flag=0;
	c = c.value;
	if(d.charAt(0) == '-')
	{
		flag = 1;
		d = d.substr(1);
	}
	d = d % b.length || 0;
	if(flag == 1)
		d = b.length - d;
	f = b.substr(d) + b.substr(0, d);
	
	if(a==0)
		e = encode(b, c, e, f);
	else
		e = decode(a, b, c, e, f);
	g.value = e;
};
function encode(b, c, e, f){
	for (i = 0; i < c.length; i++) 
	{
		a = b.lastIndexOf(c.charAt(i));
		a = f.charAt(a) || c.charAt(i);
		e += a;
	}
	return e;
};
function decode(a, b, c, e, f){
	a = b; b = f; f = a;
	for (i = 0; i < c.length; i++) 
	{
		a = b.lastIndexOf(c.charAt(i));
		a = f.charAt(a) || c.charAt(i);
		e += a;
	}
	return e;
};
