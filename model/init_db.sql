
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS animals; 
DROP TABLE IF EXISTS regions; 
DROP TABLE IF EXISTS animals_regions; 
SET foreign_key_checks = 1;
 
CREATE TABLE animals (
	id int NOT NULL AUTO_INCREMENT,
	common_name varchar(255) NOT NULL,
	species varchar(255) NOT NULL UNIQUE,
	image_src varchar(255) NOT NULL UNIQUE,
	situation_state TEXT(300) NOT NULL,
	habitat TEXT(300) NOT NULL,
	fk_related_animals varchar(255),	
	PRIMARY KEY (id)
    -- FOREIGN KEY (FK_related_animals) REFERENCES animals(id) ON DELETE CASCADE
    
);

CREATE TABLE regions (
	id int NOT NULL AUTO_INCREMENT,
	region_name varchar(255) NOT NULL,
	region_description TEXT(600) NOT NULL,
	PRIMARY KEY (id)

);

CREATE TABLE animals_regions (
	fk_animals int NOT NULL,
	fk_regions int NOT NULL,
    PRIMARY KEY (fk_animals, fk_regions),
    FOREIGN KEY (fk_animals) REFERENCES animals(id) ON DELETE CASCADE,
    FOREIGN KEY (fk_regions) REFERENCES regions(id) ON DELETE CASCADE


);

 
INSERT INTO animals (common_name, species, image_src, situation_state, habitat, fk_related_animals)  
    VALUES ('Xot',
    'Otus scops',
    'image_src1',
    'Es tracta d’una espècie protegida. 
    A Collserola és bastant comú, però està catalogada com a vulnerable a Catalunya. Es calculen de 10.000 a 14.000 individus madurs.',
    'Viu en zones urbanitzades, zones de conreus, pinars, alzinars i boscos de ribera.',
    '1,2'), 

    ('Guineu',
    'Vulpes vulpes',
    'image_src2',
    'És un mamífer resilient i molt estès per tota Catalunya a pesar de la gran persecució humana que ha patit degut a que ha estat considerat una alimanya i es va intentar exterminar.',
    'Viu en zones boscoses i en zones properes a pobles, ciutats, càmpings i abocadors.
    La podem trobar tant a altitus baixes com a alta muntanya.', '4,6');


INSERT INTO regions (region_name, region_description)  
    VALUES ('Collserola','El parc central de la metròpolis. Amb el Tibidabo com a punt més emblemàtic, el massís de Collserola esdevé avui en un espai natural imprescindible per a la conurbació metropolitana. El parc natural, amb 8.295 hectàrees, és el pulmó natural, és escola de naturalesa i un espai de pau i reconnexió per les ciutats veïnes.'), 

    ('Montserrat', 'Montserrat és la muntanya més representativa de Catalunya i, de fet, gràcies a les seves sorprenents característiques s’ha convertit en un dels símbols catalans. El massís de Montserrat és únic i inigualable. Els seus pics arrodonits, anomenats “agulles”, configuren el tret més característic i espectacular de la seva serralada. Al pic més alt de la muntanya de Montserrat es troba el cim de Sant Jeroni (1.236 m), des d’on es pot admirar una meravellosa panoràmica des dels Pirineus al mar i els dies clars, fins i tot, s’arriba a veure l’illa de Mallorca. Pel que fa a la fauna del Parc, avui dia s’hi poden trobar espècies típicament mediterrànies que conviuen, en certes zones de la serra, amb algunes de tendència centreeuropea. Quant a la flora, la muntanya de Montserrat és rica, sobretot, en alzinars i, a més, s’hi poden trobar algunes poblacions d’arbres caducifolis (com rouredes o teixedes).'),

    ("Aiguamolls de l'Empordà", "El Parc Natural dels Aiguamolls de l’Empordà va ser creat el 28 d’octubre de 1983. Els Aiguamolls de l'Empordà són una de les principals zones humides de Catalunya, juntament amb els deltes de l'Ebre i el Llobregat. Es troben ubicats a la plana empordanesa, entre les desembocadures dels rius Fluvià i Muga, en un espai caracteritzat pels cursos fluvials actuals, les antigues desembocadures dels rius, i els sistemes de canalització i rec dels conreus que històricament s'han donat en aquest lloc ric en aigua dolça.");

INSERT INTO animals_regions (fk_animals, fk_regions)  
    VALUES  
    (1, 1),
    (1, 2), 
    (1, 3), 
    (2, 1), 
    (2, 2), 
    (2, 3); 
            


