/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU3.LosMaliantes";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Lisenk20/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Manolo Martinez",
                Photo: "manolo.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere disfrutar de un viaje con su familia para relajarse y desconectar mediante distintas experiencias en un lugar distinto",
                touch1: "Agenda",
                feel1: "4",
                con1: "Ver la cantidad de trabajos que tiene pendientes para organizar los días que duraría el viaje",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca en los medios convencionales ofertas de viaje",
                touch2: "Periodico / Televisión",
                feel2: "2",
                con2: "Mucha publicidad engañosa y pocas opciones económicas, además que no aportan información de medidas COVID",
                ima2: "cartoon-reading.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Su amigo Juan le recomienda AirBnb, y comienza a buscar un destino con buenas ofertas de experiencias",
                touch3: "PC",
                feel3: "3",
                con3: "Desconfía de las 'nuevas tecnologias' y duda en realizar la reserva mediante esta página, no quiere que le estafen",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "En AirBnb, empieza a encontrar distintos destinos y experiencias que le atraen bastante y cree que pueden ser una buena sorpresa para su familia. Además, al ser un viaje cercano, no tiene mucho problema con las medidas COVID",
                touch4: "PC",
                feel4: "3",
                con4: "La página ofrece muchos filtros y opciones distintas, por lo que le resulta un poco complicado acceder a toda la información, incluidas las medidas COVID",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Selecciona varias de sus opciones favoritas y las consulta con su mujer",
                touch5: "Cara a cara",
                feel5: "4",
                con5: "A su mujer le gusta las opciones escogidas, pero Manolo no se fía de Internet. Además, tienen que rellenar mucha información para realizar la reserva",
                ima5: "cartoon-speaking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente, reservan un destino y varias experiencias en él. Pronto, van a poder disfrutar del viaje!",
                touch6: "PC",
                feel6: "3",
                con6: "Hasta que no llegaron al destino y comprobó que todas las reservas se habían realizado correctamente, temía haber sido estafado",
                ima6: "cartoon-PCtyping.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Soraya Garcia",
                Photo: "soraya.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Consulta sus proximas vacaciones con su jefe, para intentar conseguir que su experiencia sea lo mas duradera posible",
                touch1: "Agenda / Cara a cara",
                feel1: "1",
                con1: "Aunque ella quiere un viaje largo, solo consigue una semana de vacaciones",
                ima1: "cartoon-talking.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Comienza a buscar, gracias a su conocimiento de las redes, en multiples páginas y aplicaciones",
                touch2: "Movil",
                feel2: "3",
                con2: "Aunque consigue organizar la información que encuentra, cada pagina web ofrece ofertas muy distintas",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Al final, decide buscar solamente en AirBnb puesto que es la página que más le convence por su sencillez e intuición",
                touch3: "Móvil",
                feel3: "4",
                con3: "Esta un poco saturada de mirar en tantas páginas web",
                ima3: "cartoon-phone-street.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca una oferta a un lugar con mucha naturaleza y con ofertas de experiencias relajantes (spa, visitas a templos...)",
                touch4: "Móvil (webapp)",
                feel4: "5",
                con4: "Tiene un poco de miedo de ir sola a lugares donde pueda perderse, pero encuentra la opción de encontrar a gente nueva en estas experiencias",
                ima4: "cartoon-planning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra el destino perfecto para los dias que tiene de vacaciones, además bastante económico",
                touch5: "Móvil (webapp)",
                feel5: "1",
                con5: "Aunque el destino parecía perfecto, la aplicación le avisa que por la situación epidemiológica no puede ir.",
                ima5: "cartoon-phone.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Debido a las complicaciones a la hora de buscar destino, se tiene que resignar a un destino cerca de su ciudad.",
                touch6: "Ordenador (reserva)",
                feel6: "2",
                con6: "Aunque va a poder desconectar, no es lo que tenía en mente",
                ima6: "cartoon-PCangry.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



