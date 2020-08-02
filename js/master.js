var telefono = ["Los mismo de siempre", "Los diputados", "La ANEP", "La UCA", "Los magistrados de la Sala de lo Constitucional","Las organizaciones fachadas", 'Los periodistas "incómodos"', "Los seudoprofesionales","Esos organismo internacionales"];
var mes = ["quiere(n) que asesinemos a miles de salvadoreños","quiere(n) seguir robándole al pueblo","quiere(n) ver fracasar a este gobierno sin importar el precio", "quiere(n) que nos quedemos sin herramientas legales para trabajar","piensa(n) que este gobierno es corrupto como ellos","se quedó/quedaron callados cuando otros robaban","no soporta(n) ver a un gobierno que por fin trabaja por el pueblo","está(n) del lado del virus","babea(n) por ver muertos en las calles","ahora sale(n) de paladines de la democracia","es/son peor/peores que la basura","dicen lo que les mandan a decir sus patrones"];
var dui = ["pero el pueblo ya despertó, no lo van a engañar.","pero no vamos a dejar de trabajar por el pueblo de la mano de Dios y la Fuerza Armada.","que Dios los perdone, porque yo no puedo.","no entienden que la vida del pueblo está por encima de todo.","son genocidas. Alguien tenia que decido","su avaricia nubla su visión están en contra del pueblo.","pero no engañan a nadie, ya sabemos cuáles son sus intereses.","¿por qué no devuelven lo robado mejor?","¿dónde estaban en los últimos 30 años?"];
function generar(){
  var final = telefono[document.getElementById('exampleFormControlSelect1').value];
  mesAumentado = parseInt(document.getElementById('exampleFormControlSelect2').value)-1;
  final+= " "+mes[mesAumentado];
  final+= " "+dui[document.getElementById('exampleFormControlSelect3').value];
  document.getElementById('tweet-text').innerHTML = final;
  $('#myModal').modal('hide');
}
