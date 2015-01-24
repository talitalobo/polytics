##Tratamento inicial:
#Remover as posicoes dos candidatos
#Deixar o arquivo com apenas uma linha em branco entre os paragrafos (vim -> :%s/\(^\n\{2,}\)/\r/g )

## Apos o texto ser tratado executar os seguintes comandos
NOME_ARQUIVO_PRE_TRATADO = ""
NOME_ARQUIVO_TRATADO = ""

a_pre_tratado = open(NOME_ARQUIVO_PRE_TRATADO, "w")
output = a_pre_tratado.read()
a_pre_tratado.close()

output = output.replace("\n",",").replace(",,","\n")
lines = output.strip("\n")
out = ""
for line in lines:
    out += line.replace("Pontuação Inicial ","").replace(" Presença nas sessões ",",").replace(" Privilégios ",",").replace(" Participação Pública ",",").replace(" Processos judiciais ",",").replace(" Outros ",",").replace(" Qualidade Legislativa ",",").replace(",Pontuação,",",").replace("\n\n","\n")+"\n"
    
output_file = open(NOME_ARQUIVO_TRATADO, "w")
output_file.write(out)
output_file.close()

