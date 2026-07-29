
const REQUERIMIENTOS = {

  saludoInicial: {
    nombre: "Saludo Inicial",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Gracias por contactarnos.
Hemos recibido su solicitud y nos encontramos gestionando las acciones necesarias para atender su requerimiento.
Le mantendremos informado sobre cualquier avance.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Obrigado por entrar em contato.
Recebemos sua solicitação e estamos realizando as ações necessárias para atender seu requerimento.
Manteremos você informado sobre qualquer progresso.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you for contacting us.
We have received your request and are currently carrying out the necessary actions to process it.
We will keep you informed of any progress.

Kind regards,
Voice-Support
Cirion`
    }
  },

  escalamientoEspecialistas: {
    nombre: "Escalamiento a Especialistas",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Le informamos que su requerimiento ha sido derivado al equipo especializado correspondiente para su atención.
Nos mantendremos realizando el seguimiento respectivo y le informaremos sobre cualquier novedad.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Informamos que sua solicitação foi encaminhada para a equipe especializada responsável pelo atendimento.
Continuaremos acompanhando o caso e informaremos qualquer novidade.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to inform you that your request has been assigned to the corresponding specialized team for further handling.
We will continue monitoring the case and keep you informed of any updates.

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

Agradeceremos su apoyo confirmando la toma del requerimiento y el estado actual de la atención.
Quedamos atentos a cualquier información adicional necesaria para continuar con la gestión.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Agradecemos seu apoio confirmando o recebimento da solicitação e o status atual do atendimento.
Permanecemos à disposição para qualquer informação adicional necessária.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We kindly request confirmation that the request has been taken and an update on the current status of the activities.
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

Agradeceremos nos puedan compartir cualquier avance obtenido respecto al requerimiento asignado.
Quedamos atentos a sus comentarios.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Agradecemos se puder compartilhar qualquer avanço relacionado à solicitação atribuída.
Ficamos no aguardo dos seus comentários.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would appreciate any update regarding the assigned request.
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

Nos permitimos reiterar nuestra solicitud de actualización respecto al requerimiento asignado.
Agradeceremos cualquier información disponible.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Gostaríamos de reiterar nossa solicitação de atualização sobre a solicitação atribuída.
Agradecemos qualquer informação disponível.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to kindly reiterate our request for an update regarding the assigned request.
Any available information will be appreciated.

Kind regards,
Voice-Support
Cirion`
    }
  },

  ritmAInc: {
    nombre: "RITM a INC",
    campos: ["nombre","cs"],
    idiomas: {
      es: `Estimado {nombre},

Luego de revisar la información proporcionada, identificamos que el caso reportado corresponde a un incidente y no a un requerimiento, debido a que se evidencia una afectación en el servicio.
Por este motivo, hemos generado el incidente {cs}, el cual será atendido con prioridad para realizar las validaciones, investigaciones y acciones necesarias hasta la normalización del servicio.
Le mantendremos informado sobre los avances del caso.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Após revisar as informações fornecidas, identificamos que o caso reportado corresponde a um incidente e não a uma solicitação, devido à existência de um impacto no serviço.
Por esse motivo, geramos o incidente {cs}, que será tratado com prioridade até a normalização do serviço.
Manteremos você informado sobre o andamento do caso.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

After reviewing the information provided, we identified that the reported case corresponds to an incident rather than a request, as a service impact has been detected.
For this reason, we have generated incident {cs}, which will be handled with priority until the service is restored.
We will keep you informed of the case progress.

Kind regards,
Voice-Support
Cirion`
    }
  },

  solicitudValidacion: {
    nombre: "Solicitud de Validación",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Las actividades solicitadas han sido completadas.
Agradeceremos realizar las validaciones correspondientes y confirmarnos si el resultado es el esperado.
Quedamos atentos a sus comentarios.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

As atividades solicitadas foram concluídas.
Agradecemos que realize as validações correspondentes e nos confirme se o resultado está de acordo com o esperado.
Ficamos atentos aos seus comentários

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

The requested activities have been completed.
Please perform the corresponding validations and confirm whether the result meets your expectations.
We remain attentive to your feedback.

Kind regards,
Voice-Support
Cirion`
    }
  },

  recordatorioValidacion: {
    nombre: "Recordatorio de Validación",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Nos permitimos consultar si tuvo oportunidad de realizar las validaciones respecto a los cambios implementados.
Agradeceremos sus comentarios para continuar con el proceso del caso.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Gostaríamos de saber se já foi possível realizar as validações relacionadas às alterações implementadas.
Agradecemos seus comentários para continuar com o processo.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to know whether you had the opportunity to validate the implemented changes.
We would appreciate your feedback to continue with the process.

Kind regards,
Voice-Support
Cirion`
    }
  },

  pendienteConfirmacion: {
    nombre: "Caso Resuelto Pendiente de Confirmación",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

La solicitud fue atendida y los cambios requeridos fueron implementados satisfactoriamente.
Nos encontramos a la espera de su confirmación para proceder con el cierre del ticket.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

A solicitação foi atendida e as alterações necessárias foram implementadas com sucesso.
Estamos aguardando sua confirmação para prosseguir com o encerramento do ticket.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

The request has been completed and the required changes were successfully implemented.
We are awaiting your confirmation to proceed with closing the ticket.

Kind regards,
Voice-Support
Cirion`
    }
  },

  cierreDirecto: {
    nombre: "Cierre de Requerimiento",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Le informamos que su solicitud ha sido completada exitosamente.
Por nuestra parte procederemos con el cierre del ticket.
Muchas gracias por confiar en Cirion.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Informamos que sua solicitação foi concluída com sucesso.
Por nossa parte, procederemos com o encerramento do ticket.
Muito obrigado por confiar na Cirion.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We would like to inform you that your request has been successfully completed.
We will proceed with closing the ticket from our side.
Thank you for trusting Cirion.

Kind regards,
Voice-Support
Cirion`
    }
  },

  cierreConEvidencia: {
    nombre: "Cierre con Evidencia",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Su solicitud ha sido completada conforme a lo requerido.
Adjuntamos la evidencia correspondiente para su validación y registro.
Por nuestra parte procederemos con el cierre del ticket.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Sua solicitação foi concluída conforme solicitado.
Anexamos a evidência correspondente para validação e registro.
Por nossa parte, procederemos com o encerramento do ticket.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Your request has been completed as requested.
We have attached the corresponding evidence for your validation and records.
We will proceed with closing the ticket from our side.

Kind regards,
Voice-Support
Cirion`
    }
  },

  cierreConformidad: {
    nombre: "Cierre por Conformidad",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Gracias por la validación realizada.
De acuerdo con su conformidad, procederemos con el cierre del requerimiento.
Quedamos a su disposición ante cualquier consulta adicional.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Obrigado pela validação realizada.
De acordo com sua confirmação, procederemos com o encerramento da solicitação.
Permanecemos à disposição para qualquer esclarecimento adicional.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you for completing the validation.
Based on your confirmation, we will proceed with closing the request.
Please feel free to contact us if you require any additional assistance.

Kind regards,
Voice-Support
Cirion`
    }
  },

  cierreSinRespuesta: {
    nombre: "Cierre por Falta de Respuesta",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Hemos intentado comunicarnos y obtener su validación respecto a las acciones realizadas; sin embargo, no hemos recibido comentarios adicionales.
Considerando que la solicitud fue completada, procederemos con el cierre del ticket.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Tentamos obter sua validação sobre as ações realizadas; porém, não recebemos comentários adicionais.
Considerando que a solicitação foi concluída, procederemos com o encerramento do ticket.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We have attempted to obtain your validation regarding the actions performed; however, we have not received any additional feedback.
Considering that the request has been completed, we will proceed with closing the ticket.

Kind regards,
Voice-Support
Cirion`
    }
  },

  noContestaLlamada: {
    nombre: "No Contesta Llamada",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Intentamos comunicarnos con usted vía telefónica para realizar el seguimiento de su solicitud; sin embargo, no fue posible establecer contacto.
Agradeceremos indicarnos un horario disponible o respondernos por este medio.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Tentamos entrar em contato por telefone para acompanhar sua solicitação; porém, não foi possível estabelecer comunicação.
Agradecemos informar um horário disponível ou responder por este mesmo canal.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

We attempted to contact you by phone to follow up on your request; however, we were unable to reach you.
Please let us know a convenient time to contact you or reply through this channel.

Kind regards,
Voice-Support
Cirion`
    }
  },

  graciasPartner: {
    nombre: "Agradecimiento y Cierre con Partner",
    campos: ["nombre"],
    idiomas: {
      es: `Estimado {nombre},

Muchas gracias por el apoyo brindado durante la atención del requerimiento.
Con la información proporcionada, procederemos con el cierre del caso por nuestra parte.

Saludos cordiales,
Voice-Support
Cirion`,

      pt: `Prezado {nombre},

Muito obrigado pelo apoio prestado durante o atendimento da solicitação.
Com as informações fornecidas, procederemos com o encerramento do caso por nossa parte.

Atenciosamente,
Voice-Support
Cirion`,

      en: `Dear {nombre},

Thank you very much for your support during the handling of this request.
Based on the information provided, we will proceed with closing the case on our side.

Kind regards,
Voice-Support
Cirion`
    }
  }

};
