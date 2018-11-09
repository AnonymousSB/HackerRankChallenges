function timeConversion(s)
{
    let result = '';
    const parts = s.split(':');
    let hour = parseInt(parts[0]);
    const min = parts[1];
    const sec = parts[2].slice(0, 2);
    const meridian = parts[2].slice(2, 4);

    if (meridian === 'PM' && hour !== 12)
    {
        hour += 12;
    }
    if (meridian === 'AM' && hour === 12)
    {
        hour -= 12;
    }

    hour = hour.toString().padStart(2, '0');

    return result.concat(`${hour}:${min}:${sec}`);
}

timeConversion('07:05:45PM');

// 19:04:45