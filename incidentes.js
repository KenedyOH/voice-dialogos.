const INCIDENTES = {

  saludoInicial: {
    nombre: "Saludo Inicial",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Gracias por informarnos sobre el incidente reportado. Hemos registrado su caso y nuestro equipo ya se encuentra trabajando con prioridad para identificar la causa del inconveniente reportado.
Le mantendremos informado sobre cualquier avance obtenido durante la investigación.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Obrigado por nos informar sobre o incidente reportado. Registramos seu caso e nossa equipe já está trabalhando com prioridade para identificar a causa do problema informado.
Manteremos você informado sobre qualquer avanço obtido durante a investigação.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you for reporting the incident. We have registered your case and our team is already working with high priority to identify the cause of the reported issue.
We will keep you informed of any progress made during the investigation.

Kind regards,
Voice-Support
Cirion`
    }
  },

  solicitarDetalle: {
    nombre: "Solicitar Detalle del Reporte",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Para continuar con la revisión del incidente, agradeceremos nos confirme si la falla aún se presenta actualmente.
Adicionalmente, necesitamos un ejemplo reciente de llamada afectada que incluya:

• Número de origen
• Número de destino
• Fecha y hora exacta
• Descripción de la falla observada

Debido a que los registros de llamadas tienen un periodo limitado de consulta, es importante contar con ejemplos recientes para realizar una validación precisa.
Quedamos atentos.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Para continuar com a análise do incidente, agradecemos que confirme se a falha ainda está ocorrendo.
Adicionalmente, precisamos de um exemplo recente de chamada afetada contendo:

• Número de origem
• Número de destino
• Data e hora exata
• Descrição da falha observada

Como os registros de chamadas possuem um período limitado de consulta, é importante contar com exemplos recentes para uma validação precisa.
Ficamos no aguardo.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

To continue the investigation, please confirm whether the issue is still occurring.
Additionally, we require a recent affected call example including:

• Calling number
• Called number
• Exact date and time
• Description of the observed issue

Since call records are retained for a limited period, recent examples are important to perform an accurate validation.
We remain attentive to your response.

Kind regards,
Voice-Support
Cirion`
    }
  },

  escalamientoPartner: {
    nombre: "Escalamiento a Partner",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Le informamos que el caso ha sido escalado a nuestro equipo especializado para realizar una revisión más profunda del incidente reportado.
Nos encontramos realizando el seguimiento correspondiente y le mantendremos informado sobre cualquier novedad.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Informamos que o caso foi encaminhado à nossa equipe especializada para uma análise mais aprofundada do incidente reportado.
Estamos realizando o acompanhamento necessário e manteremos você informado sobre qualquer atualização.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to inform you that the case has been escalated to our specialized team for a more detailed analysis of the reported incident.
We are actively following up and will keep you informed of any updates.

Kind regards,
Voice-Support
Cirion`
    }
  },

  solicitarTomaCaso: {
    nombre: "Solicitar Toma de Caso",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Agradeceremos su apoyo confirmando la toma del caso y el estado actual de la revisión.
Quedamos atentos a sus comentarios y a cualquier información adicional que requieran para continuar con el análisis.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Agradecemos seu apoio confirmando a aceitação do caso e o status atual da análise.
Ficamos à disposição para fornecer qualquer informação adicional necessária.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We kindly request your confirmation that the case has been taken and an update on the current investigation status.
We remain available for any additional information required.

Kind regards,
Voice-Support
Cirion`
    }
  },

  solicitarAvance: {
    nombre: "Solicitar Avance",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Gracias por la confirmación del caso.
Agradeceremos nos puedan compartir cualquier avance o hallazgo obtenido durante el análisis realizado.
Quedamos atentos a sus comentarios.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Obrigado pela confirmação do caso.
Agradecemos se puder compartilhar qualquer progresso ou descoberta obtida durante a análise.
Ficamos no aguardo dos seus comentários.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you for confirming the case.
We would appreciate any updates or findings obtained during the investigation.
We look forward to your comments.

Kind regards,
Voice-Support
Cirion`
    }
  },

  reiterarAvance: {
    nombre: "Reiterar Solicitud de Avance",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Nos permitimos reiterar la solicitud de actualización sobre el incidente reportado.
Agradeceremos cualquier información disponible para mantener informado al cliente sobre el estado de la atención.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Gostaríamos de reiterar nossa solicitação de atualização sobre o incidente reportado.
Qualquer informação disponível será muito útil para manter o cliente informado.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to kindly reiterate our request for an update regarding the reported incident.
Any available information would be appreciated in order to keep the customer informed.

Kind regards,
Voice-Support
Cirion`
    }
  },

  seguimosTrabajando: {
    nombre: "Seguimos Trabajando",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Queremos informarle que continuamos trabajando en el análisis del incidente reportado.
Nuestro equipo mantiene el monitoreo y las validaciones necesarias para identificar la causa del inconveniente y compartirle cualquier novedad a la mayor brevedad posible.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Gostaríamos de informar que continuamos trabalhando na análise do incidente reportado.
Nossa equipe segue realizando monitoramentos e validações para identificar a causa do problema e compartilhar atualizações o mais rápido possível.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to inform you that we continue working on the analysis of the reported incident.
Our team remains actively monitoring and validating the issue in order to identify the root cause and provide updates as soon as possible.

Kind regards,
Voice-Support
Cirion`
    }
  },

  sinActualizacionPartner: {
    nombre: "Sin Actualización del Partner",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

El caso continúa en revisión por parte de nuestro equipo especializado.
Hasta el momento no hemos recibido una actualización adicional; sin embargo, mantenemos el seguimiento activo y hemos solicitado prioridad para su atención.
Informaremos cualquier novedad apenas esté disponible.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

O caso continua em análise por nossa equipe especializada.
Até o momento não recebemos uma atualização adicional; no entanto, seguimos acompanhando o caso e solicitamos prioridade para sua tratativa.
Informaremos qualquer novidade assim que disponível.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

The case remains under review by our specialized team.
At this time, we have not received any additional updates; however, we continue to actively follow up and have requested priority handling.
We will inform you as soon as new information becomes available.

Kind regards,
Voice-Support
Cirion`
    }
  },

  incidenteARitm: {
    nombre: "INC a RITM",
    campos: ["nombre", "cs"],
    idiomas: {
      es: `Estimado {nombre},

Luego del análisis realizado, se ha determinado que el caso reportado no corresponde a una falla del servicio, sino a un requerimiento.
Por este motivo, procederemos a gestionar el caso mediante el ticket {cs}, donde se realizará el seguimiento correspondiente hasta su atención.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Após a análise realizada, foi determinado que o caso reportado não corresponde a uma falha do serviço, mas sim a uma solicitação.
Por esse motivo, o caso será tratado através do ticket {cs}, onde será feito o acompanhamento correspondente até sua conclusão.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Following our analysis, it has been determined that the reported case does not correspond to a service failure, but rather to a service request.
For this reason, the case will be managed under ticket {cs}, where it will continue to be handled accordingly.

Kind regards,
Voice-Support
Cirion`
    }
  },

  cierreIncidente: {
    nombre: "Cierre de Incidente",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

El servicio ha sido restablecido y se realizaron las validaciones correspondientes, confirmando la normalización del incidente reportado.
Por tal motivo, procederemos con el cierre del ticket.
Ante cualquier nueva afectación, quedamos a su disposición.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

O serviço foi restabelecido e as validações necessárias foram realizadas, confirmando a normalização do incidente reportado.
Dessa forma, procederemos ao encerramento do ticket.
Caso o problema volte a ocorrer, permanecemos à disposição.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

The service has been restored and the corresponding validations have been completed, confirming the normalization of the reported incident.
Therefore, we will proceed with closing the ticket.
Should the issue occur again, please do not hesitate to contact us.

Kind regards,
Voice-Support
Cirion`
    }
  },

  notaResolucion: {
    nombre: "Nota de Resolución",
    campos: ["inicio", "fin", "problema", "resolucion"],
    idiomas: {
      es: `Inicio: {inicio}

Fin: {fin}

Problema:
{problema}

Resolución:
{resolucion}`,

      pt: `Início: {inicio}

Fim: {fin}

Problema:
{problema}

Resolução:
{resolucion}`,

      en: `Start: {inicio}

End: {fin}

Problem:
{problema}

Resolution:
{resolucion}`
    }
  },

  agradecimientoPartner: {
    nombre: "Agradecimiento Partner",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Muchas gracias por su apoyo.
Se informó al cliente de las acciones realizadas y se validó el correcto funcionamiento.
En consecuencia, procedemos con el cierre del ticket por nuestra parte.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Muito obrigado pelo seu apoio.
O cliente foi informado das ações realizadas e o correto funcionamento foi validado.
Consequentemente, procederemos ao encerramento do ticket por nossa parte.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you very much for your support.
The customer was informed of the actions performed and proper operation was successfully validated.
Therefore, we will proceed with closing the ticket on our side.

Kind regards,
Voice-Support
Cirion`
    }
  },

  contactoSinExito: {
    nombre: "Intento de Contacto sin Éxito",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Hemos intentado comunicarnos con usted mediante llamada telefónica; sin embargo, no fue posible establecer contacto.
Agradeceremos nos indique un contacto alternativo para continuar con el seguimiento correspondiente.
Quedamos atentos a sus comentarios.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Tentamos entrar em contato por telefone, porém não foi possível estabelecer comunicação.
Agradecemos se puder informar um contato alternativo para continuarmos o acompanhamento do caso.
Ficamos no aguardo dos seus comentários.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We attempted to contact you by phone; however, we were unable to reach you.
We would appreciate it if you could provide an alternative contact so that we may continue the follow-up process.
We look forward to your response.

Kind regards,
Voice-Support
Cirion`
    }
  }

};
