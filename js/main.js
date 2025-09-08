// Slide contents
const slideContents = {
    'generalidades': {
        html: `
            <div class="slide-layout">   
            <div class="map-container">
                    <div class="map-image-container">
                        <img src="assets/predio-satellite.png" alt="Vista satelital del predio" class="satellite-image">
                        <div class="map-overlay">
                            <a href="https://earth.google.com/web/@10.54376645,-75.4968952,-2.84903346a,38338.41643377d,35y,0h,0t,0r/data=CgRCAggBMikKJwolCiExQTZISG9aTWpvZ091U0dNVENUQVQtYVBQQzJLVlBqQk0gAToDCgEwQgIIAEoICNK0z_sDEAE?authuser=0" 
                            target="_blank" 
                            class="view-in-earth-btn">
                                <i class="fas fa-globe"></i> Ver en Google Earth
                            </a>
                        </div>
                    </div>
                </div>             
                <div class="content-section">
                    <h2>Predio Los Cerezos</h2>
                    <ul class="feature-list feature-list-icons">
                        <li>
                            <div class="feature-icon">
                                <img src="assets/Ubicacion.png" alt="Icono de ubicación">
                            </div>
                            <div class="feature-text">
                                <strong>Dirección:</strong> Lote 2 Denominado Guayero o Guayepo en Bayunca
                            </div>
                        </li>
                        <li>
                            <div class="feature-icon">
                                <img src="assets/Area.png" alt="Icono de área">
                            </div>
                            <div class="feature-text">
                                <strong>Area Bruta:</strong> 819,565 m²
                            </div>
                        </li>
                        <li>
                            <div class="feature-icon">
                                <img src="assets/Estrategia.png" alt="Icono de negociación">
                            </div>
                            <div class="feature-text">
                                <strong>Ubicación Estratégica:</strong> 1 Km antes del peaje, a 10 minutos 
                                de Cartagena y a 1.5 Km de la playa.
                            </div>
                        </li>
                        <li>
                            <div class="feature-icon">
                                <img src="assets/Lago.png" alt="Icono de negociación">
                            </div>
                            <div class="feature-text">
                                <strong>Lago Natural:</strong> El predio cuenta con la formación natural
                                de un lago, elemento que constituye un valioso atractivo paisajístico 
                                para el futuro desarrollo del proyecto.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Sección de documentos con botones debajo de la imagen -->
            <div class="documents-section">
                <h3>Documentos</h3>
                <div class="document-buttons">
                    <a href="assets/Cerificado de Libertad - Predio Los Cerezos - Septiembre.pdf" download class="doc-button">
                        <i class="fas fa-file-pdf"></i> Certificado de Libertad
                    </a>
                </div>
            </div>
        `
    },
    'normativa': {
        html: `
            <div class="slide-layout">
                <div class="content-section">
                    <h2>Normativa</h2>
                    <div class="regulation-cards">
                        <div class="regulation-card">
                            <h4>Tipo de Suelo</h4>
                            <div class="card-content">
                                <p>Rural Suburbano</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Trámite de Habilitación</h4>
                            <div class="card-content">
                                <p>Licencia de Parcelación y Construcción</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Usos del Suelo</h4>
                            <div class="card-content">
                                <p>Turístico, residencial, vivienda temporal</p>
                                <p class="small-text">Complementarios: Comercial 1 y 2, Industrial 1, Portuario 1, Institucional 1 y 2</p>
                            </div>
                        </div>

                        <div class="regulation-card">
                            <h4>Afectación Ambiental</h4>
                            <div class="card-content">
                                <p>140.000 m² Suelo de protección, ronda de río</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Afectación Vial</h4>
                            <div class="card-content">
                                <p>70.000 m² vía Punta Canoa</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Cesiones</h4>
                            <div class="card-content">
                                <p>Tipo A: 25% para servicios públicos</p>
                                <p>Tipo B: Mínimo 20% para equipamientos</p>
                                <p>Tipo III: 30% para equipamiento comunal privado</p>
                            </div>
                        </div>

                        <div class="regulation-card">
                            <h4>Índice de Ocupación</h4>
                            <div class="card-content">
                                <p>10% o 0.1</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Altura Máxima sin Cesiones Tipo III</h4>
                            <div class="card-content">
                                <p>3 Pisos más Altillo</p>
                            </div>
                        </div>
                        
                        <div class="regulation-card">
                            <h4>Altura Máxima con Cesiones Tipo III</h4>
                            <div class="card-content">
                                <p>5 Pisos más Altillo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map-container">
                    <div class="norma-container">
                        <img src="assets/Norma.jpg" alt="Vista normativa del predio" class="norma-image">                        
                    </div>
                </div> 
            </div>
        `
    },
'edificabilidad': {
        html: `
            <div class="slide-layout edificabilidad-slide" style="background-image: url('assets/Edificabilidad Espejo.jpg');">
                <p style="color: white; right: 20px; position: absolute; bottom: 20px;">Imagen tomada de proyecto Aria Serna Sarabia</p> 
                <!-- Capa semi-transparente -->
                <div class="overlay-translucent"></div>
                
                <!-- Título en la parte superior (área amarilla) -->
                <div class="top-title">
                    <h2>Edificabilidad</h2>
                    <h3>Potencial constructivo</h3>
                </div>
                
                <!-- Contenido -->
                <div class="content-section flex-content-row">
                    <!-- Columna izquierda (vacía ahora) -->
                    <div class="left-column">
                                        
                    </div> 
                    
                    <!-- Columna derecha con tabla - Modificada para mejor responsividad -->
                    <div class="right-column">
                        <div class="table-container">
                            <table class="data-table edificabilidad-table">
                                <thead>
                                    <tr>
                                        <th>Concepto</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead> 
                                <tbody> 
                                    <tr class="section-header">
                                        <td>Área Bruta</td>
                                        <td>819.565 m²</td>
                                    </tr>
                                    <tr>
                                        <td>Área de Afectaciones</td>
                                        <td>210.000 m²</td>
                                    </tr>
                                    <tr class="section-header">
                                        <td>Área Neta Urbanizable</td>
                                        <td>609.656 m²</td>
                                    </tr>
                                    <tr>
                                        <td>Área de Cesiones</td>
                                        <td>274.304,25 m²</td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td>Tipo A</td>
                                        <td>152.391,25 m²</td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td>Tipo B</td>
                                        <td>121.913,00 m²</td>
                                    </tr>
                                    <tr class="section-header">
                                        <td>Área Útil</td>
                                        <td>335.260,75 m²</td>
                                    </tr>
                                    <tr>
                                        <td>Cesiones Tipo III</td>
                                        <td>182.869,50 m²</td>
                                    </tr>
                                    <tr>
                                        <td>Ocupación Posible</td>
                                        <td>60.956,50 m²</td>
                                    </tr>
                                    <tr class="section-header">
                                        <td>Área Construida Máxima</td>
                                        <td>335.260,75 m²</td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td>Área Vendible (75%)</td>
                                        <td>251.445,56 m²</td>
                                    </tr>
                                    <tr class="section-header">
                                        <td>Área Construida 3 Pisos + Altillo</td>
                                        <td>213.347,75 m²</td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td>Área Vendible (75%)</td>
                                        <td>160.010,81 m²</td>
                                    </tr>
                                    <tr class="section-header">
                                        <td>Área Construida Casas 2 Pisos</td>
                                        <td>121.913,00 m²</td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td>Área Vendible (75%)</td>
                                        <td>91.434,75 m²</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'mercado': {
    html: `
        <div class="slide-layout mercado-slide" style="background-image: url('assets/Mercado.jpg') !important; background-size: cover !important; background-position: center !important; height: 100vh !important; position: relative !important;">
            <!-- Backup image in case background doesn't work -->
            <img src="assets/Mercado.jpg" alt="Fondo de mercado" style="position: absolute !important; width: 100% !important; height: 100% !important; object-fit: cover !important; z-index: 1 !important;">
            
            <!-- Capa semi-transparente -->
            <div class="overlay-translucent" style="position: absolute !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; background: rgba(255, 255, 255, 0.1) !important; z-index: 2 !important;"></div>
            
            <!-- Título en la parte superior -->
            <div class="top-title" style="position: absolute !important; top: 20px !important; left: 0 !important; right: 0 !important; text-align: center !important; z-index: 3 !important;">
                <h2>Mercado</h2> 
            </div>
            
            <!-- Marcadores de ubicación - posicionados según los marcadores morados de la imagen -->
            <div class="location-markers" style="position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: 4 !important;">
                <!-- Marcador para Barceloneta (superior izquierdo) -->
                <div class="marker" data-project="project1" style="position: absolute !important; width: 40px !important; height: 40px !important; background-color: #8E44AD !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; top: 85%; left: 45%;">
                    <i class="fas fa-map-marker-alt" style="color: white !important; font-size: 20px !important;"></i>
                </div>
                
                <!-- Marcador para Baia Kristal (superior derecho) -->
                <div class="marker" data-project="project2" style="position: absolute !important; width: 40px !important; height: 40px !important; background-color: #8E44AD !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; top: 69%; left: 54%;">
                    <i class="fas fa-map-marker-alt" style="color: white !important; font-size: 20px !important;"></i>
                </div>
                
                <!-- Marcador para Doral Cartagena (centro) -->
                <div class="marker" data-project="project3" style="position: absolute !important; width: 40px !important; height: 40px !important; background-color: #8E44AD !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; top: 50%; left: 54%;">
                    <i class="fas fa-map-marker-alt" style="color: white !important; font-size: 20px !important;"></i>
                </div>
                
                <!-- Marcador para Foresta Reservado (derecho) -->
                <div class="marker" data-project="project4" style="position: absolute !important; width: 40px !important; height: 40px !important; background-color: #8E44AD !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; top: 45%; left: 53%;">
                    <i class="fas fa-map-marker-alt" style="color: white !important; font-size: 20px !important;"></i>
                </div>
                
                <!-- Marcador para Oasis Albufera (inferior) -->
                <div class="marker" data-project="project5" style="position: absolute !important; width: 40px !important; height: 40px !important; background-color: #8E44AD !important; border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important; cursor: pointer !important; top: 65%; left: 49%;">
                    <i class="fas fa-map-marker-alt" style="color: white !important; font-size: 20px !important;"></i>
                </div>
            </div>
            
            <!-- Paneles de información de proyectos -->
            <div class="project-panels" style="position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: 5 !important;">
                <!-- PROYECTO BARCELONETA -->
                <div class="project-panel" id="project1" style="display: none; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 350px !important; background-color: rgba(255, 255, 255, 0.95) !important; border-radius: 8px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important; overflow: hidden !important;">
                    <div class="panel-header" style="background-color: #8E44AD !important; padding: 12px 15px !important; color: white !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                        <h4 style="margin: 0 !important; font-size: 16px !important;">PROYECTO BARCELONETA</h4>
                        <button class="close-panel" style="background: none !important; border: none !important; color: white !important; font-size: 24px !important; cursor: pointer !important; padding: 0 !important;">&times;</button>
                    </div>
                    <div class="panel-content" style="padding: 15px !important; font-size: 14px !important;">
                        <p style="margin: 5px 0 !important;"><strong>Desarrollador:</strong> CONSTRUCTORA BARAJAS</p>
                        <p style="margin: 5px 0 !important;"><strong>Unidades:</strong> 182 APARTAMENTOS</p>
                        <p style="margin: 5px 0 !important;"><strong>Área:</strong> 116 M² (70M² - 205M²)</p>
                        <p style="margin: 5px 0 !important;"><strong>Lanzamiento:</strong> Dic 2010</p>
                        <p style="margin: 5px 0 !important;"><strong>Entrega:</strong> Mar 2018</p>
                        <p style="margin: 5px 0 !important;"><strong>Tiempo de ventas:</strong> 87 meses</p>
                        <p style="margin: 5px 0 !important;"><strong>Ritmo de ventas:</strong> 2 und/mes</p>
                        <a href="https://cartagenanorte.com/propiedad/apartamento-barceloneta-113-mts-3-alcobas/" target="_blank" style="color: #8E44AD !important; text-decoration: none !important;">Ver proyecto</a>
                    </div>
                </div>
                
                <!-- PROYECTO BAIA KRISTAL -->
                <div class="project-panel" id="project2" style="display: none; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 350px !important; background-color: rgba(255, 255, 255, 0.95) !important; border-radius: 8px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important; overflow: hidden !important;">
                    <div class="panel-header" style="background-color: #8E44AD !important; padding: 12px 15px !important; color: white !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                        <h4 style="margin: 0 !important; font-size: 16px !important;">PROYECTO BAIA KRISTAL</h4>
                        <button class="close-panel" style="background: none !important; border: none !important; color: white !important; font-size: 24px !important; cursor: pointer !important; padding: 0 !important;">&times;</button>
                    </div>
                    <div class="panel-content" style="padding: 15px !important; font-size: 14px !important;">
                        <p style="margin: 5px 0 !important;"><strong>Desarrollador:</strong> AED</p>
                        <p style="margin: 5px 0 !important;"><strong>Unidades:</strong> 1544 APARTAMENTOS</p>
                        <p style="margin: 5px 0 !important;"><strong>Área:</strong> 90 M² (24M² - 239M²)</p>
                        <p style="margin: 5px 0 !important;"><strong>Lanzamiento:</strong> Oct 2020</p>
                        <p style="margin: 5px 0 !important;"><strong>Entrega:</strong> Mar 2023</p>
                        <p style="margin: 5px 0 !important;"><strong>Tiempo de ventas:</strong> 29 meses</p>
                        <p style="margin: 5px 0 !important;"><strong>Ritmo de ventas:</strong> 53 und/mes</p>
                        <a href="https://baiakristal.com/" target="_blank" style="color: #8E44AD !important; text-decoration: none !important;">Ver proyecto</a>
                    </div>
                </div>
                
                <!-- PROYECTO DORAL CARTAGENA -->
                <div class="project-panel" id="project3" style="display: none; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 350px !important; background-color: rgba(255, 255, 255, 0.95) !important; border-radius: 8px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important; overflow: hidden !important;">
                    <div class="panel-header" style="background-color: #8E44AD !important; padding: 12px 15px !important; color: white !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                        <h4 style="margin: 0 !important; font-size: 16px !important;">PROYECTO DORAL CARTAGENA</h4>
                        <button class="close-panel" style="background: none !important; border: none !important; color: white !important; font-size: 24px !important; cursor: pointer !important; padding: 0 !important;">&times;</button>
                    </div>
                    <div class="panel-content" style="padding: 15px !important; font-size: 14px !important;">
                        <p style="margin: 5px 0 !important;"><strong>Unidades:</strong> 762 CASAS</p>
                        <p style="margin: 5px 0 !important;"><strong>Área:</strong> 80 M² (53M² - 100M²)</p>
                        <p style="margin: 5px 0 !important;"><strong>Valor M²:</strong> $6,800</p>
                        <p style="margin: 5px 0 !important;"><strong>Ticket promedio:</strong> $530,000</p>
                        <p style="margin: 5px 0 !important;"><strong>Lanzamiento:</strong> Jul 2020</p>
                        <p style="margin: 5px 0 !important;"><strong>Vendido:</strong> 95%</p>
                        <p style="margin: 5px 0 !important;"><strong>Entrega:</strong> May 2026</p>
                        <a href="https://www.doralcartagena.com/" target="_blank" style="color: #8E44AD !important; text-decoration: none !important;">Ver proyecto</a>
                    </div>
                </div>
                
                <!-- PROYECTO FORESTA RESERVADO -->
                <div class="project-panel" id="project4" style="display: none; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 350px !important; background-color: rgba(255, 255, 255, 0.95) !important; border-radius: 8px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important; overflow: hidden !important;">
                    <div class="panel-header" style="background-color: #8E44AD !important; padding: 12px 15px !important; color: white !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                        <h4 style="margin: 0 !important; font-size: 16px !important;">PROYECTO FORESTA RESERVADO</h4>
                        <button class="close-panel" style="background: none !important; border: none !important; color: white !important; font-size: 24px !important; cursor: pointer !important; padding: 0 !important;">&times;</button>
                    </div>
                    <div class="panel-content" style="padding: 15px !important; font-size: 14px !important;">
                        <p style="margin: 5px 0 !important;"><strong>Unidades:</strong> 170 CASAS</p>
                        <p style="margin: 5px 0 !important;"><strong>Área:</strong> 162 M² (100M² - 230M²)</p>
                        <p style="margin: 5px 0 !important;"><strong>Valor M²:</strong> $4,800</p>
                        <p style="margin: 5px 0 !important;"><strong>Ticket promedio:</strong> $780,000</p>
                        <p style="margin: 5px 0 !important;"><strong>Lanzamiento:</strong> Feb 2022</p>
                        <p style="margin: 5px 0 !important;"><strong>Vendido:</strong> 70%</p>
                        <p style="margin: 5px 0 !important;"><strong>Entrega:</strong> Oct 2027</p>
                        <a href="https://forestareservado.com/" target="_blank" style="color: #8E44AD !important; text-decoration: none !important;">Ver proyecto</a>
                    </div>
                </div>
                
                <!-- PROYECTO OASIS ALBUFERA -->
                <div class="project-panel" id="project5" style="display: none; position: absolute !important; top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; width: 350px !important; background-color: rgba(255, 255, 255, 0.95) !important; border-radius: 8px !important; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important; overflow: hidden !important;">
                    <div class="panel-header" style="background-color: #8E44AD !important; padding: 12px 15px !important; color: white !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                        <h4 style="margin: 0 !important; font-size: 16px !important;">PROYECTO OASIS ALBUFERA (VT)</h4>
                        <button class="close-panel" style="background: none !important; border: none !important; color: white !important; font-size: 24px !important; cursor: pointer !important; padding: 0 !important;">&times;</button>
                    </div>
                    <div class="panel-content" style="padding: 15px !important; font-size: 14px !important;">
                        <p style="margin: 5px 0 !important;"><strong>Unidades:</strong> 30 APARTAMENTOS</p>
                        <p style="margin: 5px 0 !important;"><strong>Área:</strong> 73 M² (52M² - 137M²)</p>
                        <p style="margin: 5px 0 !important;"><strong>Valor M²:</strong> $8,900</p>
                        <p style="margin: 5px 0 !important;"><strong>Ticket promedio:</strong> $725,000</p>
                        <p style="margin: 5px 0 !important;"><strong>Lanzamiento:</strong> Jun 2025</p>
                        <p style="margin: 5px 0 !important;"><strong>Vendido:</strong> 33%</p>
                        <p style="margin: 5px 0 !important;"><strong>Entrega:</strong> Ene 2027</p>
                        <a href="https://www.oasisalbufera.com/" target="_blank" style="color: #8E44AD !important; text-decoration: none !important;">Ver proyecto</a>
                    </div>
                </div>
            </div>
        </div>
    `
    },
'prefactibilidad': {
    html: `
        <div class="slide-layout">
            <div class="content-section prefactibilidad-content">
                <h2>Prefactibilidad</h2>
                
                <div class="prefactibilidad-container">
                    <!-- Panel de escenarios (izquierda) -->
                    <div class="prefactibilidad-sidebar">
                        <div class="prefactibilidad-buttons">
                            <!-- Botones circulares -->
                            <button id="btn-scenario1" class="scenario-btn">
                                <span>Apartamentos<br>5 pisos y<br>medio</span>
                            </button>
                            
                            <button id="btn-scenario2" class="scenario-btn">
                                <span>Apartamentos<br>3 pisos y<br>medio</span>
                            </button>
                            
                            <button id="btn-scenario3" class="scenario-btn">
                                <span>Casas<br>2 pisos</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Panel de resultados financieros (derecha) -->
                    <div class="prefactibilidad-results">
                        <!-- Escenario 1: Apartamentos 5 pisos y medio -->
                        <div id="scenario1-data" class="scenario-data">
                            <h4 class="scenario-title-apt5"></h4>
                            <table class="prefactibilidad-table">
                                <tr>
                                    <th>Concepto</th>
                                    <th>Valor</th> 
                                    <th>%</th>
                                </tr>
                                <tr>
                                    <td class="column-total">VENTAS TOTALES</td>
                                    <td class="column-value">$ 1.961.275.388</td>
                                    <td class="column-percent">100%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS DIRECTOS</td>
                                    <td class="column-value">$ 902.186.678</td>
                                    <td class="column-percent">46%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS INDIRECTOS</td>
                                    <td class="column-value">$ 313.804.062</td>
                                    <td class="column-percent">16%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS FINANCIEROS Y DE VENTAS</td>
                                    <td class="column-value">$ 137.289.277</td>
                                    <td class="column-percent">7%</td>
                                </tr>
                                <tr>
                                    <td>UTILIDAD</td>
                                    <td class="column-value">$ 235.353.047</td>
                                    <td class="column-percent">12%</td>
                                </tr>
                                <tr>
                                    <td>COSTO URBANIZACIÓN</td>
                                    <td class="column-value">$ 78.451.016</td>
                                    <td class="column-percent">4%</td>
                                </tr>
                                <tr>
                                    <td>RESIDUAL TERRENO</td>
                                    <td class="column-value">$ 294.191.308</td>
                                    <td class="column-percent">15%</td>
                                </tr>
                                <tr class="result-row">
                                    <td class="result-cell">VLR M2 BRUTO</td>
                                    <td class="column-value" colspan="2">$ 358,96</td>
                                </tr>
                            </table>
                        </div>
                        
                        <!-- Escenario 2: Apartamentos 3 pisos y medio -->
                        <div id="scenario2-data" class="scenario-data">
                            <h4 class="scenario-title-apt3"></h4>
                            <table class="prefactibilidad-table">
                                <tr>
                                    <th>Concepto</th>
                                    <th>Valor</th>
                                    <th>%</th>
                                </tr>
                                <tr>
                                    <td class="column-total">VENTAS TOTALES</td>
                                    <td class="column-value">$ 1.248.084.338</td>
                                    <td class="column-percent">100%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS DIRECTOS</td>
                                    <td class="column-value">$ 574.118.795</td>
                                    <td class="column-percent">46%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS INDIRECTOS</td>
                                    <td class="column-value">$ 199.693.494</td>
                                    <td class="column-percent">16%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS FINANCIEROS Y DE VENTAS</td>
                                    <td class="column-value">$ 87.365.904</td>
                                    <td class="column-percent">7%</td>
                                </tr>
                                <tr>
                                    <td>UTILIDAD</td>
                                    <td class="column-value">$ 149.770.121</td>
                                    <td class="column-percent">12%</td>
                                </tr>
                                <tr>
                                    <td>COSTO URBANIZACIÓN</td>
                                    <td class="column-value">$ 49.923.374</td>
                                    <td class="column-percent">4%</td>
                                </tr>
                                <tr>
                                    <td>RESIDUAL TERRENO</td>
                                    <td class="column-value">$ 187.212.651</td>
                                    <td class="column-percent">15%</td>
                                </tr>
                                <tr class="result-row">
                                    <td class="result-cell">VLR M2 BRUTO</td>
                                    <td class="column-value" colspan="2">$ 228,43</td>
                                </tr>
                            </table>
                        </div>
                        
                        <!-- Escenario 3: Casas 2 pisos -->
                        <div id="scenario3-data" class="scenario-data">
                            <h4 class="scenario-title-casas"></h4>
                            <table class="prefactibilidad-table">
                                <tr>
                                    <th>Concepto</th>
                                    <th>Valor</th>
                                    <th>%</th>
                                </tr>
                                <tr>
                                    <td class="column-total">VENTAS TOTALES</td>
                                    <td class="column-value">$ 457.173.750</td>
                                    <td class="column-percent">100%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS DIRECTOS</td>
                                    <td class="column-value">$ 210.299.925</td>
                                    <td class="column-percent">46%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS INDIRECTOS</td>
                                    <td class="column-value">$ 73.147.800</td>
                                    <td class="column-percent">16%</td>
                                </tr>
                                <tr>
                                    <td>COSTOS FINANCIEROS Y DE VENTAS</td>
                                    <td class="column-value">$ 32.002.163</td>
                                    <td class="column-percent">7%</td>
                                </tr>
                                <tr>
                                    <td>UTILIDAD</td>
                                    <td class="column-value">$ 54.860.850</td>
                                    <td class="column-percent">12%</td>
                                </tr>
                                <tr>
                                    <td>COSTO URBANIZACIÓN</td>
                                    <td class="column-value">$ 18.286.950</td>
                                    <td class="column-percent">4%</td>
                                </tr>
                                <tr>
                                    <td>RESIDUAL TERRENO</td>
                                    <td class="column-value">$ 68.576.063</td>
                                    <td class="column-percent">15%</td>
                                </tr> 
                                <tr class="result-row"> 
                                    <td class="result-cell">VLR M2 BRUTO</td>
                                    <td class="column-value" colspan="2">$ 83,67</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
},
    'conclusiones': {
    html: `
        <link rel="stylesheet" href="css/styleConclusiones.css">
        <div class="slide-layout full-width">
            <div class="conclusion-content">
                <h2>Condiciones de Negociación</h2>
                
                <div class="negotiation-terms">
                    <ul class="feature-list">
                        <li> 
                            <strong>Modelo de negocio:</strong> Predio en Aporte, se escuchan ofertas y modelos de negocio. 
                            El propietario está dispuesto a participar en el proyecto, con un pago inicial mínimo del 5% 
                            para gastos de comisión.
                        </li>
                        <li>
                            <strong>Valor mínimo garantizado:</strong> $180.000/m²
                        </li>
                    </ul>
                </div>
                
                <div class="contact-info">
                    <p><strong>LAM Consultoría Inmobiliaria</strong></p>
                    <p>lmilenaarq@gmail.com - alfredo@inmobiliariayconstructoratitan.com | Tel: (57) 314 4903759- (57) 313 3918422</p>
                </div>
                
                <div class="disclaimer"> 
                    <p><em>La información técnica, financiera y comercial presentada ha sido preparada por LAM, su grupo de 
                    expertos y aliados. Los comentarios, información y proyecciones contenidas, corresponden a la fecha de 
                    divulgación y se encuentran sujetos a cambios sin previo aviso, pues atienden al comportamiento de la economía, 
                    los insumos de construcción, las variables macroeconómicas y el entorno en general. Los datos expuestos en el 
                    documento provienen de fuentes y proveedores consideradas confiables, sin embargo LAM, su grupo de expertos y 
                    aliados no se hacen responsables de su veracidad ni de la interpretación que de los mismos se haga. Este documento 
                    no es ni pretende brindar asesoría de inversión; la información, herramientas y material contenido en el texto, son 
                    proporcionados meramente con fines informativos y no deben ser utilizados ni entendidos como una oferta, consejo, 
                    asesoría o recomendación de inversión ni para comprar, vender o emitir valores y/o cualquier otro instrumento 
                    financiero, ni para realizar cualquier otro tipo de transacción comercial. El contenido de la presente comunicación 
                    o mensaje no constituye una recomendación profesional para realizar inversiones en los términos del artículo 2.40.1.1.2 
                    del Decreto 2555 de 2010 o las normas que lo modifiquen, sustituyan o complementen. De igual manera las imágenes utilizadas 
                    han sido tomadas de la web, pertenecen a sus autores originales y no a LAM, su grupo de expertos y aliados.</em></p>
                </div>
            </div>
        </div>
    `
}
};

// Function to start presentation
function startPresentation() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        
        // Activate first item
        const firstItem = document.querySelector('[data-slide="generalidades"]');
        if (firstItem) {
            changeSlide('generalidades');
        }
    }, 500);
}

// Function to go back to intro
function goToIntro() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    
    mainContent.style.display = 'none';
    introScreen.style.display = 'flex';
    introScreen.style.opacity = '1';
    
    // Reset active timeline item
    document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
}

// Function to open property location
function openPropertyLocation() {
    window.open('https://maps.google.com/?q=25.6714,100.309', '_blank');
}

// Function to open property gallery
function openPropertyGallery() {
    window.open('gallery.html', '_blank');
}

// Function to change slide content
function changeSlide(slideId) {
    const slideContent = document.getElementById('slideContent');
    const content = slideContents[slideId];
    
    if (content) {
        slideContent.style.opacity = '0';
        setTimeout(() => {
            slideContent.innerHTML = content.html;
            slideContent.style.opacity = '1';
        }, 300);
    }
}

// Event listeners for timeline items
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all
            timelineItems.forEach(el => el.classList.remove('active'));
            
            // Add active class to clicked
            this.classList.add('active');
            
            // Change slide content
            const slideId = this.getAttribute('data-slide');
            changeSlide(slideId);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeItem = document.querySelector('.timeline-item.active');
        if (!activeItem) return;
        
        let targetItem = null;
        
        if (e.key === 'ArrowDown') {
            targetItem = activeItem.nextElementSibling;
        } else if (e.key === 'ArrowUp') {
            targetItem = activeItem.previousElementSibling;
        }
        
        if (targetItem && targetItem.classList.contains('timeline-item')) {
            targetItem.click();
        }
    });
    
    // Initialize with first slide
    const firstSlide = document.querySelector('.timeline-item[data-slide="generalidades"]');
    if (firstSlide) {
        changeSlide('generalidades');
    }

    // Manejo de clics en marcadores de ubicación
    document.addEventListener('click', function(e) { 
        // Verificar si el clic fue en un marcador o en su ícono
        const marker = e.target.closest('.marker');
        if (marker) {
            const projectId = marker.getAttribute('data-project');
            const panel = document.getElementById(projectId);
            
            // Ocultar todos los paneles primero
            document.querySelectorAll('.project-panel').forEach(panel => {
                panel.classList.remove('show-panel');
            });
            
            // Mostrar el panel seleccionado
            if (panel) {
                panel.classList.add('show-panel');
            }
        }
        
        // Manejo del botón de cerrar panel
        if (e.target.classList.contains('close-panel')) {
            const panel = e.target.closest('.project-panel');
            if (panel) {
                panel.classList.remove('show-panel');
            }
        }
    });
});