const tools=[
  {name:'HWMonitor',text:'Outil de surveillance permettant de contrôler en temps réel les températures, tensions et fréquences du CPU, GPU, RAM et autres composants.'},
  {name:'CrystalDiskInfo',text:"Logiciel d'analyse de l'état de santé des disques durs et SSD via les données S.M.A.R.T. Détecte les disques défaillants avant qu'ils ne tombent en panne."},
  {name:'Cinebench',text:'Outil de benchmark du processeur (mono et multicoeur) basé sur le moteur de rendu Cinema 4D. Permet de comparer les performances CPU et de détecter les throttlings.'},
  {name:'OCCT',text:"Logiciel de test de stabilité du système. Permet de stress-tester le CPU, GPU et l'alimentation afin de détecter les problèmes thermiques et d'instabilité."},
  {name:'Passmark Memtest',text:'Outil de test mémoire permettant de vérifier la fiabilité et la stabilité des barrettes RAM. Détecte les erreurs mémoire physiques et les problèmes de compatibilité.'},
  {name:'PC3000',text:'Outil professionnel de récupération de données et de diagnostic avancé pour disques HDD et SSD. Utilisé pour les cas complexes de pannes de stockage.'}
];

function showTool(i){
  document.querySelectorAll('#tool-tabs .inner-tab').forEach(function(t,j){t.classList.toggle('active',i===j)});
  document.getElementById('tool-name').textContent=tools[i].name;
  document.getElementById('tool-text').textContent=tools[i].text;
}

function showRes(id){
  document.querySelectorAll('.res-panel').forEach(function(p){p.style.display='none'});
  document.getElementById('res-'+id).style.display='block';
  document.querySelectorAll('#res-tabs .inner-tab').forEach(function(t){t.classList.remove('active')});
  event.currentTarget.classList.add('active');
}

function handleFile(input,listId){
  var list=document.getElementById(listId);
  list.innerHTML='';
  for(var i=0;i<input.files.length;i++){
    list.innerHTML+='<div style="margin-top:.3rem">\u{1F4C4} '+input.files[i].name+'</div>';
  }
}
