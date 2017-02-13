void strcat( char* dest, char* src) {
  while (*dest) dest++;
  while(*dest++ = *src++);
  return --dest;
}

char bigString[1000];
char *p = bigString;
bigString[0] = '\0';
p = mystrcat(p,"John, ");
p = mystrcat(p,"Paul, ");
p = mystrcat(p,"George, ");
p = mystrcat(p,"Joel ");
