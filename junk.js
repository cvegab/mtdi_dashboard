var x=29;
var y = x<13 ? "Child" : x<20 ? "Teenage" : x<30 ? "Twenties" : "Old people";
console.log(y);



<ModalHeader toggle={toggle}>
        <img src={Icon1} alt=“Icon” className=“icon-modal” width=“35" height=“auto” />
        {/* ¡Hey! */}
        </ModalHeader>
        <ModalBody>
          <p className=“texto-modal”><strong>{t(“modal.text-modal”)} </strong><br/><br/>{t(“modal.sub-text-modal1")} <br/><br/> {t(“modal.sub-text-modal2”)}</p>
        </ModalBody>
        <ModalFooter>
        <Button
          className=“boton-modal”
          type=“button”
          href=“/contacto”
          >
            {t(“modal.boton-modal”)}
        </Button>
        {/* <Button color=“primary” onClick={toggle}>Cancelar</Button> */}
        </ModalFooter>
      </Modal>