import { MapPinIcon } from "lucide-react";

export function AdminTemplate() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">
            Condomínio Jardim dos Sonhos
          </h3>
        </div>
        <div className="flex justify-center px-8">
          <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg py-8">
            <div className="flex px-8 items-start gap-4">
              <MapPinIcon size={68} color="#0074D9" />
              <p className="text-base font-normal">
                <span className="font-bold">Endereço: </span>
                <br />
                Rua das Flores, 123. Bairro Jardim Encantado - Cidade das
                Estrelas, SP. CEP 12345-678 - Brasil
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-8 gap-4">
          <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg py-8 space-y-4">
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Bloco A: </span>
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Número de Andares: </span>
                <br />
                10
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Apartamento por Andar: </span>
                <br />4
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Total de Apartamentos: </span>
                <br />
                40
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Numeração dos Apartamentos: </span>
                <br />1 ao 40
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-8 gap-4">
          <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg py-8 space-y-4">
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Bloco B: </span>
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Número de Andares: </span>
                <br />
                10
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Apartamento por Andar: </span>
                <br />4
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Total de Apartamentos: </span>
                <br />
                40
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Numeração dos Apartamentos: </span>
                <br />
                41 ao 80
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex px-8 pt-4 items-start gap-4">
          <h3 className="text-base font-medium">Políticas Importantes</h3>
        </div>
        <div className="flex justify-center px-8">
          <div className="w-full sm:w-80 h-full border rounded-lg shadow-lg py-8 space-y-4">
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Horário de Silêncio: </span>
                Das 22h às 7h, de segunda a sexta, e das 23h às 8h nos fins de
                semana e feriados.
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Horário de Silêncio: </span>
                <br />
                • Piscina: Aberta das 8h às 22h. É obrigatório tomar ducha antes
                de entrar na piscina.
                <br />
                • Salão de Festas: Disponível para aluguel mediante reserva com
                antecedência de pelo menos 7 dias. Capacidade máxima de 50
                pessoas.
                <br />• Academia: Funcionamento 24 horas. Uso exclusivo para
                moradores maiores de 16 anos.
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Animais de Estimação: </span>
                Permitidos, desde que não perturbem os demais moradores. Animais
                devem estar na coleira nas áreas comuns.
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Estacionamento: </span>
                <br />
                • Cada apartamento tem direito a uma vaga de estacionamento.
                <br />• Vagas adicionais podem ser alugadas, dependendo da
                disponibilidade.
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Segurança: </span>
                <br />
                • Portaria 24 horas.
                <br />• Sistema de câmeras de segurança nas entradas e áreas
                comuns.
              </p>
            </div>
            <div className="flex px-8 items-start gap-4">
              <p className="text-base font-normal">
                <span className="font-bold">Contatos Importantes: </span>
                <br />
                • Administração do Condomínio: (11) 98765-4321.
                <br />• Portaria: (11) 91234-5678.
                <br />• Emergência: (11) 99999-0000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
