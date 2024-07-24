var arr = [
  'ruAMsa53pVQWN7FLK88i5u.paacB.OrigNbh5IfdBpD0greDPZoxCIbO9udQBLoskWlVvtXVyJLtOYvi5cLrmy30j1sHdQqGygs4PlvrUOQ!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5tMkMGPiF3Gml7kfIDHjMOWS5t1B*prXkrmDprtP*btPP19LNntV9QLO7K60rW5Rhi4liBbOcv3xybDzUaNH8RQ!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5tMkMGPiF3Gml7kfIDHjMOWygqU5BN.FJoP63eUjvB9UgpNPz6ElFsusB0IEXQSQe35EwiLGpPEUx3mOEe..nOc!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5tMkMGPiF3Gml7kfIDHjMOW2DMmsxwWr.FVXe1mslErZjteLzXRUcgYCkFR3Zkeus7m36dVxz6APSDbYCLs3*n0!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5tMkMGPiF3Gml7kfIDHjMOWjZ40pT8pBuZNyuh625Rkryj092IsGrWmMNawGRoxcWL00E1zqAWiSQs.N9HsmPYE!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5kwqz4Nz1KE9pJfGsFOnrct4WwADgOQ6OXwIK6hte2PG3vylsrWdIc3adJosRyUlZhcI4AIDCp453m4cnjMP7BY!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5kwqz4Nz1KE9pJfGsFOnrcu1u3LImVu3AxbbWx*zYN9uYdThZBEvDrJI6fSM3xoBvkqtJgPSGBAK6SRPrgOT*kM!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5kwqz4Nz1KE9pJfGsFOnrcv9ywBs.CE86g9iJ3pLNpKSqFa.0DyyDuCOSAJs*V5qC3WklOKjAy6CIM2MHQ2xHJM!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5kwqz4Nz1KE9pJfGsFOnrcuUfh9UJG1xnInvkqdsGUhW9fDz5EtQANc6utwDNbh7WxhfrMdmfR3Ve8EOyK.tyQo!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5o*.hBrSQLs9XVroKJx3Xgyxcc4Sys2Kqn9YDn9B0jA5lPF2sCvRAk0dGUqAOggm2jB0QjcddhROyv.MrRQFm6w!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5o*.hBrSQLs9XVroKJx3Xgy274LdhRGPJCFCrXIHf8sBgm*OCKC9lt5giT2A0*twgr3Ap6B3AzwWC6gFSOaqVE8!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5hPueRKAqNKo2CqBZnGERw0qj00NcQh.fHU9UEqLfCdG4vxWHneAJpxigq42QKBEf5EUZIUcNoEAI4GkDFLJyX0!/b&bo=oAXQAgAAAAABJ3c',
  'ruAMsa53pVQWN7FLK88i5hPueRKAqNKo2CqBZnGERw3XYZZptEMSHVAvvl2FntpHlxiecG9b7PfFLRV0B7W6aWR3C5m0WWLJh0mrkVbmd5g!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5hPueRKAqNKo2CqBZnGERw3R.JpkcSMXLeAARL.MPYVWw4gzmwME*72VvewtpdnVyyLI3glcti.aq9PjOwhD*SQ!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5hPueRKAqNKo2CqBZnGERw3XgMKvSF5nT8NmOHLjeiSr.p8*C2QdTRfR*iwwVD8DmnEf*QVqvIsI469xVd8NWzE!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTu8CGCm4ebYmLeG0zj27k8BDTPh6tVMgUJChYauKqRyJb.6Ve08SJknJvul2maw6G4!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTtoRmldLpmuRItZ4gSAdTl3pkOPtPJU3WtnSFuyzwpMk..VA6*qg..sS6BYnUXbsWk!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTv15HInRa*duP.Nv.*xZlNsAvtJq789ldV*i2kMbXZjb8Zjiyhx8RPQi1JTBnj22IM!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTvyYzKMzRDHWB13v*a0PNSomXl1fLnCG.XESHrJbDqKBgdElnAnpL6xvpnkNzF5rvs!/b&bo=oAXQAgAAAAABF0c',
  'ruAMsa53pVQWN7FLK88i5vB6TDRLJVjuMt6z6aK.FZaqQUQzneZy8H3ylKHxyRomrxNUWTuM3LObK67sU16HNyxAcbB8EUbobuD6VRU8foQ!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5vB6TDRLJVjuMt6z6aK.FZbUsniaNBHOe.omHO1pOG2kbeL2Mf5q47nPV.aZ4NqJaBV5OW*s.rr*w7GfN5tNCcA!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vB6TDRLJVjuMt6z6aK.FZZDinwSwZgTFr.S6Ct4AeZZ9gTcM4kLbEh6NhV0oroBuzCwMMFKvAwHDMh38CNbgjY!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vB6TDRLJVjuMt6z6aK.FZaOn6ASjQCUPflz2NGzu0Jqo4QyFDatHyAsjtH6aRoJ2JKyLGMAIMgMvHHrY5.xNYk!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDlQouSM9n8aK59VJF8NidMFPScOqdrx93XvmghuaZ2hTx9UesddI1P1tXZBgWmpWCk!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDmbKFJUSyrIjwFtvgaTFKUGHHIzcXlHVgghzRzxX3siE*MT95PlpB5EJxzqGanRu*Q!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDmPydcHNvOUPg2LyorCtrNtv0s2LGvGki2nSb7HYr4seCnYcSITlbdntHL11EB82RI!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDmx9av0lsK8SU7nzwizRK1GIgx0NLZhYXxI85bp9zw91t8r9PPUAhhRNAEXEGp6nCs!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vt4clZJp.BS4x81nwgQjOLEotlPdPW*of1Lc0kltmLfKz*6qaQXolv72cq4n6R.ijtBmaM*RkPp*MVpcl7jsvU!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vt4clZJp.BS4x81nwgQjOJxRjjWhWmuNS3JK*RzHeu5LXRkIwGQACf93oIN.EmfxuDCw9YlF0wwptNaRpPLNDg!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vt4clZJp.BS4x81nwgQjOIt7nk4aDzS.*8p.bxxzqLgFZti0T5*l1EnZT70LngAKKMSsPtQ6zkn7GrFN*JqUSY!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5vt4clZJp.BS4x81nwgQjOLY2gcJpZ8*DBCPB14r53DZXbslfAb9izNaXJCdf0Rz*TpTlgZddoTKD8u1kF3UUps!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5hfbRdUety9YsfG*zRvFztDCAuy4UF2eaeOrAmQnRAUdE9HFwpPANJr55.ogvQknKzUN5kaJ09UAs8B9oGYTRMs!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5hfbRdUety9YsfG*zRvFztCEz3Z7i3PiWThWV5Xae8UkVyWZvDJQoGuNoRbwqQXp5vQnxwoBc6W8ZUS6C1PCwhE!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTuidksPXKdodYyhN58aEHxZUJLZNQAYUQfArWfRETX3W1mnRt8h6*qhiAhp.JoMD2c!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTtMHlmtDlTuQHdscVakO*yXYe4eR2MFqQAfoGqklfob03KRm5Q3QHGUsvn6x6hZ4tc!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5lNPlWnLnQtfIb.QnIpknTtj435pBfajzcJ*1DH38VaDs7iEEYcCMZIXWIU*gHbptGRln05S8ehpayylgZ3K4B8!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5tqvw6AVQxImo84qllYcVDNaXJq6cK2U59XFkYbm3dLcAHKeUrWBSrgcGukGxBRKUR*TeC0J3pgsVFb*nqDMQ7E!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5tqvw6AVQxImo84qllYcVDOzuv04jCezJvR4SQlFyYWMz.WSO4CBUG4bHQUShzYI1zndkxxpPzX5Wk9hQuGojTA!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5tqvw6AVQxImo84qllYcVDM5luquM0w9*OUSEpwqlmvYqeMDd8m00T70MjwUgjn5eIvryaKxdtw3jJ.SXkbUJpk!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFdeMfBXwrc8lerwnCD0MpoOqnXh6xwpQuur0MDFiPgmuBPtd76gKeAPtEnVFPycVTU!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFeFpge0aObQN3*HmTSb2ZlOsE3FFMr7***1G8PYjPwCnpukyl*EsVdXy106M4UgEJ8!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFdzK3ueRG9cVIpJrg66a3iIjx10JtnBFXD1WiqOnad4DHrV33X*IY5EMwJc*9IAquM!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFf*E9wjRviG8SmczHYkEp*XXUeJSc6IJHekd.irQDt5nsLT3ohxeOCmbl45o0ntIa0!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5gbT*liK6bq15vxwdv.Dpav9mbNdVa6KUPU5w*aN*l6No1DcVm31dz02cUPSRzQ41vdXiXfcpXAur*5yBF8qlkY!/b&bo=oAXQAqAF0AIBGT4',
  'ruAMsa53pVQWN7FLK88i5gbT*liK6bq15vxwdv.DpatnCEvR2E*uVhsRqXRgI58Gmpn2cSqnzC.lIxCtc.ree7gBQeKlMyd984ZwWyBIsE0!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5mehnwUGxqh*eE*GkaD6OAJ79utxragexqtpomLyK9ZzpetLtTzbiprmZxh6tssAm9b*yPaQYeEUtz..wNqV*JU!/b&bo=gAxABnAXuAsBCTA',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDnQJCKmS4BI9r.m2Z8fksrFpQ9tdhuF*hDABkBq4fBrK2IQ2g*xC*NtFs2SRYyYybc!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5qiIrMjdxQ06EjloiDDYJDnM7UmhRekJHEiT1VxPJfG4DtJqlNjnO6UPV66oZjXHau4aXqtkYTVqpCN13lO2Tc4!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFeiphhfmf1HYcYNP.wyjsqWIDDyBBf8geS0woeBf8Sm4JLORnnokZ4mwhNNnGT3kq8!/b&bo=oAXQAqAF0AIBCS4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFcEtVx24dcHg5Rz0GV3SSfl7R11V37fPuljDsz.z*W1PYYkYGMf3JhKVMtq*XD4b4c!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5m6WqTA4iS6pjQlLeFQgFFdhKX1zgJ1fdiBdljoWcK1HpFbuOUVV2AvNi7nSmazNS3*ot7U3tz8MZtvpP7CUrS0!/b&bo=oAXQAqAF0AIBOR4',
  'ruAMsa53pVQWN7FLK88i5gbT*liK6bq15vxwdv.DpatWvQ3f7Z7lqpaA5DrFoDUprjEb9bW2xrPGIQKRRHxMNgLYYXm5HrhmddB6EKsuW1k!/b&bo=oAXQAqAF0AIBOR4',
  'ruAMsa53pVQWN7FLK88i5gbT*liK6bq15vxwdv.Dpas5Q09qFhe*roz3PpQxf*LGomJ8FCUePZN.3w4NIaERykenaR8qekWkuEitQefohHo!/b&bo=oAXQAqAF0AIBOR4',
  'TmEUgtj9EK6.7V8ajmQrEPoSgRvwiuaBo0lRJt3dSLeOGIyNpuFiccoWXwzRUuARrfHqkPx9Ci.jJK1oev6eW3hj6EZ3pOOlVSaLJozjD1A!/b&bo=oAXQAqAF0AIBOR4',
  'TmEUgtj9EK6.7V8ajmQrEA4cYByoqpTVsb569*bsbIlnERumQcKa3P5vYzXHq6w92UXSZik9C2CTgjntjGa1nc1TW16eYh2KRc9gauZfu6Y!/b&bo=oAXRAqAF0QIBKQ4',
  'TmEUgtj9EK6.7V8ajmQrEA4cYByoqpTVsb569*bsbIljITk2gFDHIUBQ4kiLogiq0Wou6mReo79eO4jRFRhhdbnJLh.wKJ8K5cOMjb3isMw!/b&bo=oAXQAqAF0AIBKQ4',
  'ruAMsa53pVQWN7FLK88i5uCLbqW1rix7obCEZwZRtk1M59kUonF..Ir*ZPasGOehyU5hbR7rGjEQ1qzcSMzJWcHy7j*LL3XmNOPo0I.pKgQ!/b&bo=oAXQAqAF0AIBOR4',
  'ruAMsa53pVQWN7FLK88i5uCLbqW1rix7obCEZwZRtk31DYicWlmBFYtyt8vC*B8oNZvjzs9eY0.DMBEodwoP*XZ84l5f7ZsmGO2JMucjKms!/b&bo=oAXQAqAF0AIBOR4',
  
]

function hideOrShowImage(){
  var cont = document.querySelector('#btn1').innerHTML
  document.querySelector('#btn1').innerHTML = cont == '❀显示❀' ? '❀隐藏❀' : '❀显示❀'
  document.querySelector('#main').style.visibility = cont == '❀显示❀' ? 'visible' : 'hidden'
}

function changeOnce(){
  var randomNum = Math.floor(Math.random() * arr.length);
  document.querySelector('#bg').style.backgroundImage = 'url(http://m.qpic.cn/psc?/V51iFEXX11ZNjb2MuqyI2Foofx1NejGM/' + arr[randomNum] + '!&rf=viewer_4)';
}
changeOnce()

function changeImage(){
  var cont2 = document.querySelector('#btn2').innerHTML
  document.querySelector('#btn2').innerHTML = cont2 == '❀按一下❀' ? '❀不要按❀' : '❀按一下❀'
  changeOnce()
}

function changeContent(index){
  document.querySelector('#part' + index).style.display = 'block'
  document.querySelector('#btn' + (index+3)).style.color = '#fff'
  document.querySelector('#btn' + (index+3)).style.backgroundColor = '#000'
  document.querySelector('#btn' + (index+3)).style.border = '#000'
  for(var i=0; i<4; i++){
    (function(i){
      if(i !== index){
        document.querySelector('#part' + i).style.display = 'none'
        document.querySelector('#btn' + (i+3)).style.color = '#000'
        document.querySelector('#btn' + (i+3)).style.backgroundColor = '#ebebeb'
        document.querySelector('#btn' + (i+3)).style.border = '#ebebeb'
      }
    })(i)
  }
}
changeContent(0)

var width = window.innerWidth;
var height = window.innerHeight;
document.querySelector('#main').style.width = width + 'px'
document.querySelector('#main').style.height = height + 'px'
document.querySelector('#inner').style.width = parseInt(width * 0.6) + 'px'
document.querySelector('#inner').style.height = parseInt(height * 0.7) + 'px'
document.querySelector('#inner2').style.height = parseInt(height * 0.6)  + 'px'

if( width < 1080 ){
	document.querySelector('body').style.fontSize = 12 + 'px'
}else if( width >= 1080 && width < 2560){
	document.querySelector('body').style.fontSize = 20 + 'px'
}else if( width >= 2560) {
	document.querySelector('body').style.fontSize = 24 + 'px'
}