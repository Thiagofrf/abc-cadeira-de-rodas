export default function Footer () {
    return (
        <footer className="flex-col absolute w-full">
            <div className="bg-[#1e3a8a] text-white flex px-60 h-24 items-center">
                <p className="text-2xl font-bold w-1/4 text-center">Sobre a ABC</p>
                <p className="w-3/4 text-sm">São mais de 10 anos de mercado atuando na locação venda e conserto de itens hospitalares como cadeiras de rodas, andadores, muletas e vários tipos de peças para atender suas necessidades, com os melhores preços do mercado. </p>
            </div>
            <div className="bg-[#1d4ed8] text-white flex px-60 h-40 items-center justify-between">
                <p className="text-3xl font-bold">Rua Pernambuco, 391 - Centro - São Caetano do Sul/SP</p>
                <p className="text-2xl font-bold">(11) 4226-6474</p>
                <div>
                    <p className="text-xl font-bold">Horários de Funcionamento:</p>
                    <p>Segunda à Sexta: 08h às 17h</p>
                    <p>Sábados: 09h às 13h</p>
                </div>
            </div>
            <div className="px-60 my-10">
                <p className="text-xs">ABC Cadeira de Rodas Comercial LTDA, Rua Pernambuco, 391 | São Caetano do Sul</p>
                <p className="text-xs">Telefone: (11) 4226-6474. Copyright © 2024 abccadeiraderodas.com.br. Todos os Direitos Reservados</p>
            </div>
        </footer>
    )
}