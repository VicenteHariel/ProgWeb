 $(document).ready(function(){
 $('#btn').click(function valida_ie() {
    var ie =   document.getElementById('IE').value;
    var estado = document.getElementById('UF').value;
    ie = ie.replace(/[()-./,:]/g, "");
    if (VerificaIE(estado, ie)){
        alert('Deu BELEZA é válido');
    }else{
        alert('Inscrição Estadual INCORRETA.');
       }
});
 
 
 $('#l').click(function(){
     $("#IE").val("");
 });
 
 
 
 
 
  // function para cada estado  

//Acre
function CheckIEAC(ie){
	if (ie.length != 13){return false;}
	else{
		if (ie.substring(0,2) != '01'){return false;}
		else{
			$b = 4;
			$soma = 0;
			for (i=0; i<=10; i++){
				$soma += ie[i] * $b;
				$b--;
				if($b == 1){$b = 9;}
			}
			$dig = 11 - ($soma % 11);
			if($dig >= 10){$dig = 0;}
			if( !($dig == ie[11]) ){return false;}
			else{
				$b = 5;
				$soma = 0;
				for(i=0; i<=11; i++){
					$soma += ie[i] * $b;
					$b--;
					if($b == 1){$b = 9;}
				}
				$dig = 11 - ($soma % 11);
				if($dig >= 10){$dig = 0;}

				return($dig == ie[12]);
                }
            }
        }
    } // fim acre
    
// Alagoas
function CheckIEAL(ie){
	if (ie.length != 9){return false;}
	else{
		if(ie.substring(0, 2) != '24'){return false;}
		else{
			$b = 9;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			$soma *= 10;
			$dig = $soma - ((Math.floor($soma / 11)) * 11 );
			if($dig == 10){$dig = 0;}

			return ($dig == ie[8]);
		}
	}
} // fim Alagoas  

//Amazonas
function CheckIEAM(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		if($soma <= 11){$dig = 11 - $soma;}
		else{
			$r = $soma % 11;
			if($r <= 1){$dig = 0;}
			else{$dig = 11 - $r;}
		}

		return ($dig == ie[8]);
	}
}// fim Amazonas  

//Amapá
function CheckIEAP(ie){
	if (ie.length != 9){return false;}
	else{
		if(ie.substring(0, 2) != '03'){return false;}
		else{
			i = ie.substring(-1, 8);
            
			if( (i >= 3000001) && (i <= 3017000) ){$p = 5; $d = 0;}
			else if( (i >= 3017001) && (i <= 3019022) ){$p = 9; $d = 1;}
			else if (i >= 3019023){$p = 0; $d = 0;}

			$b = 9;
			$soma = $p;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			$dig = 11 - ($soma % 11);
			if($dig == 10){$dig = 0;}
			else if($dig == 11){$dig = $d;}

			return ($dig == ie[8]);
		}
	}
} // fim Amapá

//Bahia
function CheckIEBA(ie){
	if (ie.length != 8){return false;}
	else{

		$arr1 = ['0','1','2','3','4','5','8'];
		$arr2 = ['6','7','9'];

		i = ie.substring(0, 1);

		if($arr1.includes(i)){$modulo = 10;}
        else if($arr2.includes(i)){$modulo = 11;}

		$b = 7;
		$soma = 0;
		for(i=0;i<=5;i++){
			$soma += ie[i] * $b;
			$b--;
		}

		i = $soma % $modulo;
		if ($modulo == 10){
			if (i == 0) { $dig = 0; } else { $dig = $modulo - i; }
		}else{
			if (i <= 1) { $dig = 0; } else { $dig = $modulo - i; }
		}
		if( !($dig == ie[7]) ){return 0;}
		else{
			$b = 8;
			$soma = 0;
			for(i=0;i<=5;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			$soma += ie[7] * 2;
			i = $soma % $modulo;
			if ($modulo == 10){
				if (i == 0) { $dig = 0; } else { $dig = $modulo - i; }
			}else{
				if (i <= 1) { $dig = 0; } else { $dig = $modulo - i; }
			}

			return ($dig == ie[6]);
		}
	}
} // fim Bahia

//Ceará
function CheckIECE(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		$dig = 11 - ($soma % 11);

		if ($dig >= 10){$dig = 0;}

		return ($dig == ie[8]);
	}
}

// Distrito Federal
function CheckIEDF(ie){
	if (ie.length != 13){return 0;}
	else{
		if( ie.substring( 0, 2) != '07' ){return false;}
		else{
			$b = 4;
			$soma = 0;
			for (i=0;i<=10;i++){
				$soma += ie[i] * $b;
				$b--;
				if($b == 1){$b = 9;}
			}
			$dig = 11 - ($soma % 11);
			if($dig >= 10){$dig = 0;}

			if( !($dig == ie[11]) ){return false;}
			else{
				$b = 5;
				$soma = 0;
				for(i=0;i<=11;i++){
					$soma += ie[i] * $b;
					$b--;
					if($b == 1){$b = 9;}
				}
				$dig = 11 - ($soma % 11);
				if($dig >= 10){$dig = 0;}

				return ($dig == ie[12]);
			}
		}
	}
}// fim DF

//Espirito Santo
function CheckIEES(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		i = $soma % 11;
		if (i < 2){$dig = 0;}
		else{$dig = 11 - i;}

		return ($dig == ie[8]);
	}
} // fim Espirito Santo

//Goias
function CheckIEGO(ie){
	if (ie.length != 9){return false;}
	else{
		$s = ie.substring(0, 2);

		if( !( ($s == 10) || ($s == 11) || ($s == 15) ) ){return false;}
		else{
			$n = ie.substring(0, 7);

			if($n == 11094402){
				if((ie[8] != 0) || (ie[8] != 1)){return false;
                }else {return true;}
			}else{
				$b = 9;
				$soma = 0;
				for(i=0;i<=7;i++){
					$soma += ie[i] * $b;
					$b--;
				}
				i = $soma % 11;
				if (i == 0){$dig = 0;}
				else{
					if(i == 1){
						if(($n >= 10103105) && ($n <= 10119997)){$dig = 1;}
						else{$dig = 0;}
					}else{$dig = 11 - i;}
				}

				return ($dig == ie[8]);
			}
		}
	}
} // fim Goiás

// Maranhão
function CheckIEMA(ie){
	if (ie.length != 9){return 0;}
	else{
		if(ie.substring(0, 2) != 12){return false;}
		else{
			$b = 9;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			i = $soma % 11;
			if (i <= 1){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[8]);
		}
	}
}// fim Maranhão

//Minas Gerais
function CheckIEMG(ie){
	if (ie.length != 13){return false;}
	else{
        
        //calcula o primeiro digito
	ie2 = ie.substring(0, 3)+'0'+ie.substring(3);
        $b = 1;
		$soma = 0;
        
	for(i=0;i<=11;i++){
        $c = ($c = ie2[i] * $b);
		$soma += $c.toString();                      
        
        $b++;
		if($b == 3){$b = 1;}
        }
       
        
        $s = 0;
		for(i=0; i < $soma.length; i++){
            $s += parseInt($soma[i]);
        }
               
       div = 10;
            while ((div/$s)<1){
             div += 10;   
            }
            $dig1 = div - $s;
           
        if ($dig1 != ie2[12]){return false;}
        else{
        //calcula o segundo digito
        $b = 3;
			$soma = 0;
			for(i=0;i<=12;i++){
				$soma += ie[i] * $b;
				$b--;
				if($b == 1){$b = 11;}
			}
			i = $soma % 11;
			if(i < 2){$dig = 0;}
			else{$dig = 11 - i;};

			return ($dig == ie[12]);
        }
        
	}
}//fim Minas Gerais

// Mato Grosso do Sul
function CheckIEMS(ie){
	if (ie.length != 9){return false;}
	else{
		if(ie.substring(0, 2) != 28){return false;}
		else{
			$b = 9;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			i = $soma % 11;
			if (i == 0){$dig = 0;}
			else{$dig = 11 - i;}

			if($dig > 9){$dig = 0;}

			return ($dig == ie[8]);
		}
	}
}// fim Mato Grosso do Sul

// Mato Grosso
function CheckIEMT(ie){
	if (ie.length != 11){return false;}
	else{
		$b = 3;
		$soma = 0;
		for(i=0;i<=9;i++){
			$soma += ie[i] * $b;
			$b--;
			if($b == 1){$b = 9;}
		}
		i = $soma % 11;
		if (i <= 1){$dig = 0;}
		else{$dig = 11 - i;}

		return ($dig == ie[10]);
	}
}// fim MT

//Pará
function CheckIEPA(ie){
	if (ie.length != 9){return false;}
	else{
		if(ie.substring( 0, 2) != 15){return false;}
		else{
			$b = 9;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			i = $soma % 11;
			if (i <= 1){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[8]);
		}
	}
} // fim Pará

//Paraíba
function CheckIEPB(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		i = $soma % 11;
		if (i <= 1){$dig = 0;}
		else{$dig = 11 - i;}

		if($dig > 9){$dig = 0;}

		return ($dig == ie[8]);
	}
}
//fim Paraíba

//Pernambuco
function CheckIEPE(ie){
	if (ie.length == 9){
		$b = 8;
		$soma = 0;
		for(i=0;i<=6;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		i = $soma % 11;
		if (i <= 1){$dig = 0;}
		else{$dig = 11 - i;}

		if ( !($dig == ie[7]) ){return false;}
		else{
			$b = 9;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			i = $soma % 11;
			if (i <= 1){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[8]);
		}
	}
	else if(ie.length == 14){
		$b = 5;
		$soma = 0;
		for(i=0;i<=12;i++){
			$soma += ie[i] * $b;
			$b--;
			if($b == 0){$b = 9;}
		}
		$dig = 11 - ($soma % 11);
		if($dig > 9){$dig = $dig - 10;}

		return ($dig == ie[13]);
	}
	else{return false;}
}// fim Pernanbuco

//Piauí
function CheckIEPI(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		i = $soma % 11;
		if(i <= 1){$dig = 0;}
		else{$dig = 11 - i;}
		if($dig >= 10){$dig = 0;}

		return ($dig == ie[8]);
	}
}// Fim Piauí

//Paraná
function CheckIEPR(ie){
	if (ie.length != 10){return false;}
	else{
		$b = 3;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
			if($b == 1){$b = 7;}
		}
		i = $soma % 11;
		if (i <= 1){$dig = 0;}
		else{$dig = 11 - i;}

		if ( !($dig == ie[8]) ){return false;}
		else{
			$b = 4;
			$soma = 0;
			for(i=0;i<=8;i++){
				$soma += ie[i] * $b;
				$b--;
				if($b == 1){$b = 7;}
			}
			i = $soma % 11;
			if(i <= 1){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[9]);
		}
	}
}// fim Paraná

// Rio de Janeiro
function CheckIERJ(ie){
	if (ie.length != 8){return false;}
	else{
		$b = 2;
		$soma = 0;
		for(i=0;i<=6;i++){
			$soma += ie[i] * $b;
			$b--;
			if($b == 1){$b = 7;}
		}
		i = $soma % 11;
		if (i <= 1){$dig = 0;}
		else{$dig = 11 - i;}

		return ($dig == ie[7]);
	}
}// fim Rio de Janeiro

//Rio Grande do Norte
function CheckIERN(ie){
	if( !( (ie.length == 9) || (ie.length == 10) ) ){return false;}
	else{
		$b = ie.length;
		if($b == 9){$s = 7;}
		else{$s = 8;}
		$soma = 0;
		for(i=0;i<=$s;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		$soma *= 10;
		$dig = $soma % 11;
		if($dig == 10){$dig = 0;}

		$s += 1;
		return ($dig == ie[$s]);
	}
}// fim Rio Grande do Norte

// Rio Grande do Sul
function CheckIERS(ie){
	if (ie.length != 10){return false;}
	else{
		$b = 2;
		$soma = 0;
		for(i=0;i<=8;i++){
			$soma += ie[i] * $b;
			$b--;
			if ($b == 1){$b = 9;}
		}
		$dig = 11 - ($soma % 11);
		if($dig >= 10){$dig = 0;}

		return ($dig == ie[9]);
	}
}// fim Rio Grande do Sul

// Rondônia
function CheckIERO(ie){
	if (ie.length == 9){
		$b=6;
		$soma =0;
		for(i=3;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		$dig = 11 - ($soma % 11);
		if($dig >= 10){$dig = $dig - 10;}

		return ($dig == ie[8]);
	}
	else if(ie.length == 14){
		$b=6;
		$soma=0;
		for(i=0;i<=12;i++) {
			$soma += ie[i] * $b;
			$b--;
			if($b == 1){$b = 9;}
		}
		$dig = 11 - ( $soma % 11);
		if ($dig > 9){$dig = $dig - 10;}

		return ($dig == ie[13]);
	}
	else{return false;}
}// Fim Rondônia

//Roraima
function CheckIERR(ie){
	if (ie.length != 9){return false;}
	else{
		if(ie.substring( 0, 2) != 24){return false;}
		else{
			$b = 1;
			$soma = 0;
			for(i=0;i<=7;i++){
				$soma += ie[i] * $b;
				$b++;
			}
			$dig = $soma % 9;

			return ($dig == ie[8]);
		}
	}
}// Fim Roraima

//Santa Catarina
function CheckIESC(ie){
	ie = ie.replace(/[()-./,:]/g, "");
    if (ie.length != 9){console.log(ie)}
	else{
		$b = 9;
		$soma = 0;
		for(i=0; i<=7; i++){
			$soma += ie[i] * $b;
			$b--;
		}
		$dig = 11 - ($soma % 11);
		if ($dig <= 1){$dig = 0;}

		return ($dig == ie[8]);
	}
 } // fim  Santa Catarina  
 
//São Paulo
function CheckIESP(ie){
    sub = ie.substring(0,1);
	if( sub.toUpperCase() == 'P' ){
		if (ie.length != 13){return false;}
		else{
			$b = 1;
			$soma = 0;
			for(i=1; i<=8; i++){
				$soma += ie[i] * $b;
				$b++;
				if($b == 2){$b = 3;}
				if($b == 9){$b = 10;}
			}
			$dig = $soma % 11;
			return ($dig == ie[9]);
		}
	}else{
        //calcula 1 digito verificador
        var dig1 = 0;
        var dig2 = 0;
		if (ie.length = 12){
			$b = 1;
			$soma = 0;
			for(i=0; i<=7; i++){
				$soma += ie[i] * $b;
				$b++;
				if($b == 2){$b = 3;}
				if($b == 9){$b = 10;}
			}
			$dig = $soma % 11;
			if($dig > 9){$dig = 0;}
    
     if($dig != ie[8]){return false;}
			else{
				$b = 3;
				$soma = 0;
				for(i=0; i<=10; i++){
					$soma += ie[i] * $b;
					$b--;
					if($b == 1){$b = 10;}
				}
				$dig = $soma % 11;
                
                return ($dig == ie[11]);
				
			}
		} else{return false}
	}
} // fim  de São Paulo
 
 //Sergipe
function CheckIESE(ie){
	if (ie.length != 9){return false;}
	else{
		$b = 9;
		$soma = 0;
		for(i=0;i<=7;i++){
			$soma += ie[i] * $b;
			$b--;
		}
		$dig = 11 - ($soma % 11);
		if ($dig > 9){$dig = 0;}

		return ($dig == ie[8]);
	}
} // fim Sergipe
 
 
 
 //Tocantins
function CheckIETO(ie){
	if (ie.length == 11){
		$s = ie.substring(2, 4);
		if( !( ($s=='01') || ($s=='02') || ($s=='03') || ($s=='99') ) ){return false;}
		else{
			$b=9;
			$soma=0;
			for(i=0;i<=9;i++){
				if( !((i == 2) || (i == 3)) ){
					$soma += ie[i] * $b;
					$b--;
				}
			}
			i = $soma % 11;
			if(i < 2){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[10]);
		 }
	}else if (ie.length == 9){
		
			$b=9;
			$soma=0;
			for(i=0;i<9;i++){
				$soma += ie[i] * $b;
				$b--;
			}
			i = $soma % 11;
			if(i < 2){$dig = 0;}
			else{$dig = 11 - i;}

			return ($dig == ie[8]);
		
        }else{ return false;}
    }// fim Tocantins
 
 function VerificaIE(uf,ie){
      var ie = ie.replace(/[()-./,:]/g, "");
      var estado = uf;
      var retorno = false;
switch (estado)
{
  case 'MG': return retorno = CheckIEMG(ie); break;
  case 'AC': return retorno = CheckIEAC(ie); break;
  case 'AL': return retorno = CheckIEAL(ie); break;
  case 'AM': return retorno = CheckIEAM(ie); break;
  case 'AP': return retorno = CheckIEAP(ie); break;
  case 'BA': return retorno = CheckIEBA(ie); break;
  case 'CE': return retorno = CheckIECE(ie); break;
  case 'DF': return retorno = CheckIEDF(ie); break;
  case 'ES': return retorno = CheckIEES(ie); break;
  case 'GO': return retorno = CheckIEGO(ie); break;
  case 'MA': return retorno = CheckIEMA(ie); break;
  case 'MT': return retorno = CheckIEMT(ie); break;
  case 'MS': return retorno = CheckIEMS(ie); break;
  case 'PA': return retorno = CheckIEPA(ie); break;
  case 'PB': return retorno = CheckIEPB(ie); break;
  case 'PR': return retorno = CheckIEPR(ie); break;
  case 'PE': return retorno = CheckIEPE(ie); break;
  case 'PI': return retorno = CheckIEPI(ie); break;
  case 'RJ': return retorno = CheckIERJ(ie); break;
  case 'RN': return retorno = CheckIERN(ie); break;
  case 'RS': return retorno = CheckIERS(ie); break;
  case 'RO': return retorno = CheckIERO(ie); break;
  case 'RR': return retorno = CheckIERR(ie); break;
  case 'SC': return retorno = CheckIESC(ie); break;
  case 'SP': return retorno = CheckIESP(ie); break;
  case 'SE': return retorno = CheckIESE(ie); break;
  case 'TO': return retorno = CheckIETO(ie); break;
 
    } // fim switch
 }// fim VerificaIE()
 
 }); // fim DOC.READY