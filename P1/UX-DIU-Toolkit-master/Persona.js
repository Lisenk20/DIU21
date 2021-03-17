/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU3.LosMaliantes";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Lisenk20/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Manolo Martinez",
				Photo: "manolo.png",
				Quote: "La familia, lo primero",
				Age: 42,
				Occupation: "Electricista",
				Family: "Casado desde hace 17 años, con 2 hijos (un niño de 9 años y una niña de 6 años)",
				Location: "Bolaños de Calatrava, Castilla La Mancha",
				Character: "Le apasiona mucho su trabajo, aunque necesita un descanso para disfrutar de su familia.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Asegurarle un buen futuro a sus hijos", "Expandir su negocio a otra localidad"],
				Frustrations: ["Sabe mucho sobre su trabajo, pero muy poco sobre las nuevas tecnologias", "Le gustaría tener más tiempo libre"],
				Bio: "Es de Bolaños de Calatrava, donde se crió y donde actualmente reside. Desde pequeño, ayudaba a su padre (que también era electricista) y, tras el paso de los años, estableció su pequeña empresa en el pueblo. Más tarde, formó su familia junto a su mujer con un estilo de vida muy humilde",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Lleva muchos años trabajando sin parar, y le apetece darle una pequeña sorpresa a su familia con unas vacaciones tras haber ahorrado un poco de dinero (buscando soluciones baratas)",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Soraya Garcia",
				Photo: "soraya.png",
				Quote: "No persigas tus sueños, ¡cázalos!",
				Age: 36,
				Occupation: "Marketing digital y publicidad en IO Marketing",
				Family: "Soltera. Mantiene relación con su padre y su madre, humildes y casados.",
				Location: "Pozuelo de Alarcón",
				Character: "Es muy activa y con apariencia fuerte, aunque en la soledad se siente sola y le gustaría una vida más sencilla",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Conseguir ser su propia jefa", "Encontrar su media naranja", "Recuperar su juventud perdida por los estudios y la busqueda del futuro perfecto"],
				Frustrations: ["Su trabajo es demasiado estresante, no le deja mucho tiempo libre", "No consigue conectar con mucha gente", "Ha viajado poco debido a la falta de tiempo"],
				Bio: "Desde pequeña, sus padres siempre le han inculcado que debe de estudiar ya que 'ellos no pudieron'. Por tanto, se ha pasado toda su vida planeando su futuro. Cuando termine su doble grado (con matrícula de honor), consiguió el trabajo que siempre había soñado. Sin embargo, ahora que lo tiene, se ha dado cuenta de que no ha valorado las distintas etapas que ha ido pasando, y sueña con recuperarlas.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Busca despejarse del ambiente en el que esta consumida, e intenta encontrarse a si misma." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])

